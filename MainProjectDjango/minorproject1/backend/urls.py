from django.urls import path
from . import views
urlpatterns = [
    path('webcamlive/',views.index),
    path('api/', views.ListTodo.as_view()),
    path('api/<int:pk>/', views.DetailTodo.as_view()),
    
]
