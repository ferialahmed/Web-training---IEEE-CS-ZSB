from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import *

class Taskform(forms.ModelForm):
    class Meta:
        model=Tasks
        fields='__all__'

class CreateUserFom(UserCreationForm):
    class Meta:
        model=User
        fields=['username', 'email', 'password1', 'password2']
