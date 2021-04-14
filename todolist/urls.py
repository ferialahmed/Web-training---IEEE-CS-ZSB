from django.urls import path
from todolist import views

urlpatterns = [
    path("", views.home, name="home"),
    path('update_task/<str:pk>/',views.editTask,name="update_task"),
    path('delet_task/<str:pk>/',views.delTask,name="delete_task")
]