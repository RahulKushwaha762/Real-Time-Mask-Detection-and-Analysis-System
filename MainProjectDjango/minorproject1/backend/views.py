from django.shortcuts import render,HttpResponse
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import load_model
import numpy as np
import cv2
import os
from imutils.video import VideoStream
from os.path import dirname, join
import imutils
from django.views.decorators import gzip
from .models import Mask
import datetime
from datetime import datetime
from time import gmtime, strftime

protoPath = join(dirname(__file__), "deploy.prototxt")
weightPath = join(dirname(__file__), "res10_300x300_ssd_iter_140000.caffemodel")
modelPath = join(dirname(__file__), "mobilenet_v2.model")
prototxtPath=protoPath 
weightsPath=weightPath
faceNet=cv2.dnn.readNet(prototxtPath,weightsPath)
maskNet = load_model(modelPath)


from django.shortcuts import render
from django.http import HttpResponse,StreamingHttpResponse
import cv2
import time
from rest_framework import generics
from .models import Mask
from .serializers import MaskSerializer


class ListTodo(generics.ListCreateAPIView):
    queryset = Mask.objects.all()
    serializer_class = MaskSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mask.objects.all()
    serializer_class = MaskSerializer



class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0,cv2.CAP_DSHOW)
    def __del__(self):
        self.video.release()

    def get_frame(self):
        #ret,image = self.video.read()
        value = 0
        ret,frame=self.video.read()
        frame=imutils.resize(frame,width=400)
        (locs,preds)=detect_and_predict_mask(frame,faceNet,maskNet)
        for (box,pred) in zip(locs,preds):
            (startX,startY,endX,endY)=box
            (mask,withoutMask)=pred
            label='Mask' if mask>withoutMask else 'No Mask'
            obj = Mask()
            if(label=='Mask'):
                value = 1
                obj.with_mask = value
                obj.without_mask = 0
            else:
                obj.without_mask = 1
                obj.with_mask = 0    
            day_of_week = datetime.today().strftime('%A')    
            date_time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            print(day_of_week,date_time,value)
            obj.date_time = date_time
            obj.day_week = day_of_week
            obj.save()
            color=(0,255,0) if label=='Mask' else (0,0,255)
            cv2.putText(frame,label,(startX,startY-10),cv2.FONT_HERSHEY_SIMPLEX,0.45,color,2)
            cv2.rectangle(frame,(startX,startY),(endX,endY),color,2)
            print(value)
        
        #cv2.imwrite('1.jpg', frame)    
        #cv2.imshow("Frame",frame)
        #key=cv2.waitKey(1) & 0xFF
        #if key==ord('q'):
            #break
    #cv2.destroyAllWindows()
    #vs.stop()
    #vs.stream.release()
        ret,jpeg = cv2.imencode('.jpg',frame)
        return jpeg.tobytes()

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield(b'--frame\r\n'
        b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@gzip.gzip_page
def index(request): 
    try:
        return StreamingHttpResponse(gen(VideoCamera()),content_type="multipart/x-mixed-replace;boundary=frame")
    except HttpResponseServerError as e:
        print("aborted")


def detect_and_predict_mask(frame,faceNet,maskNet):
    (h,w)=frame.shape[:2]
    blob=cv2.dnn.blobFromImage(frame,1.0,(300,300),(104.0,177.0,123.0))
    faceNet.setInput(blob)
    detections=faceNet.forward()
    faces=[]
    locs=[]
    preds=[]
    for i in range(0,detections.shape[2]):
        confidence=detections[0,0,i,2]

        if confidence>0.5:
      
            box=detections[0,0,i,3:7]*np.array([w,h,w,h])
            (startX,startY,endX,endY)=box.astype('int')
            (startX,startY)=(max(0,startX),max(0,startY))
            (endX,endY)=(min(w-1,endX), min(h-1,endY))
            face=frame[startY:endY, startX:endX]
            face=cv2.cvtColor(face,cv2.COLOR_BGR2RGB)
            face=cv2.resize(face,(224,224))
            face=img_to_array(face)
            face=preprocess_input(face)
            faces.append(face)
            locs.append((startX,startY,endX,endY))
        if len(faces)>0:
            faces=np.array(faces,dtype='float32')
            preds=maskNet.predict(faces,batch_size=12)
        return (locs,preds)
        
def run(request):
    
    vs=VideoStream(src=0).start()
    while True:
        frame=vs.read()
        frame=imutils.resize(frame,width=400)
        (locs,preds)=detect_and_predict_mask(frame,faceNet,maskNet)
        for (box,pred) in zip(locs,preds):
            (startX,startY,endX,endY)=box
            (mask,withoutMask)=pred
            label='Mask' if mask>withoutMask else 'No Mask'
            color=(0,255,0) if label=='Mask' else (0,0,255)
            cv2.putText(frame,label,(startX,startY-10),cv2.FONT_HERSHEY_SIMPLEX,0.45,color,2)
            cv2.rectangle(frame,(startX,startY),(endX,endY),color,2)
        
        cv2.imwrite('D:/RMDAS/1.jpg', frame)    
        cv2.imshow("Frame",frame)
        key=cv2.waitKey(1) & 0xFF
        if key==ord('q'):
            break
    cv2.destroyAllWindows()
    vs.stop()
    vs.stream.release()
    return HttpResponse("hello")
