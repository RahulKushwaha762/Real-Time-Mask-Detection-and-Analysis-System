from django.urls import path
from . import views
urlpatterns = [
    path('webcamlive/',views.index),
    
]
