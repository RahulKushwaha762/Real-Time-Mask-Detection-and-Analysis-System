// import React,{useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';
// import axios from 'axios'
// import fileDownload from 'js-file-download'
// import base64Img from 'base64-img';
// // import fs from 'fs';

// export default function webcam() {
//     // const [i, setI] = useState(0);
//     // function handleTakePhoto (dataUri) {
//     //     setI(i+1);
//     //     // Do stuff with the photo...
//     //     // axios.get(dataUri, {
//     //     //     responseType: 'jpeg',
//     //     //   })
//     //     //   .then((res) => {
//     //     //     fileDownload(res.data, i)
//     //     //   })
//     //     // var base64Str = dataUri;
//     //     // var path = '../src';
//     //     // var optionalObj = {'fileName': i, 'type':'jpeg'};
//     //     // base64ToImage(base64Str,path,optionalObj); 

//     //     base64Img.img(dataUri, '' , i, function(err, filepath) {
//     //         console.log(err + " " + filepath);
//     //     });
//     //     console.log(dataUri);
//     //     console.log('takePhoto');
//     //   }
     
//     //   function handleTakePhotoAnimationDone (dataUri) {
//     //     // Do stuff with the photo...
//     //     console.log('takePhoto');
//     //   }
     
//     //   function handleCameraError (error) {
//     //     console.log('handleCameraError', error);
//     //   }
     
//     //   function handleCameraStart (stream) {
//     //     console.log('handleCameraStart');
//     //   }
     
//     //   function handleCameraStop () {
//     //     console.log('handleCameraStop');
//     //   }
//     var listOfImages =[];

//     function importAll(r){
//         return r.keys().map(r);
//     }

//     useEffect(() => {
//         listOfImages = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
//         console.log(listOfImages)
//     }, []);

//     return (
//     //     <Camera
//     //   onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
//     //   onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
//     //   onCameraError = { (error) => { handleCameraError(error); } }
//     //   idealFacingMode = {FACING_MODES.ENVIRONMENT}
//     //   idealResolution = {{width: 640, height: 480}}
//     //   imageType = {IMAGE_TYPES.JPG}
//     //   imageCompression = {0.97}
//     //   isMaxResolution = {true}
//     //   isImageMirror = {false}
//     //   isSilentMode = {false}
//     //   isDisplayStartCameraError = {true}
//     //   isFullscreen = {false}
//     //   sizeFactor = {1}
//     //   onCameraStart = { (stream) => { handleCameraStart(stream); } }
//     //   onCameraStop = { () => { handleCameraStop(); } }
//     // />
//     <><div>
//     {
//           listOfImages.map(
//             (image, index) =>    <img key={index} src={image} alt="info"></img>
//           )
//     }
//     <h1>here</h1>
// </div></>
//     )
// }
import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './Imageloader'
var listOfImages =[];

class webcam extends React.Component{
    // importAll(r) {
    //     return r.keys().map(r);
    // }
    // componentWillMount() {
    //     listOfImages = this.importAll(require.context('../../../MinorProjectTest/MainProjectDjango/minorproject1/1.jpg', false, /\.(png|jpe?g|svg)$/));
    // }
    render(){
        return(
          <div>
              {/* {
                    listOfImages.map(
                      (image, index) =>    <img key={index} src={image} alt="info" height="400" width="400" style={{margin:"10px"}}></img>
                    )
              } */}
              {/* <Component1 backgrounds={listOfImages}/> */}
              {/* setInterval(() => { */}
              <img src={'../../../MinorProjectTest/MainProjectDjango/minorproject1/1.jpg'} alt="info"></img>
              {/* }, 2000); */}
          </div>
        )
    }
}
export default webcam;
