from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.forms import inlineformset_factory
from .models import Tasks
from .form import CreateUserFom, Taskform
from django.contrib.auth import authenticate, login, logout, get_user_model

def register(request):

    form=CreateUserFom()
    # user=UserCreationForm()
    if request.method == "POST":
        form=CreateUserFom(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/login')
    context={'form':form}
    return render(request,'register.html',context)

def loginPage(request):

    # form=CreateUserFom()
    # user=UserCreationForm()
    # username=request.POST['password']
    if request.method == "POST":
        username=request.POST['username']
        password=request.POST['password']
        user=authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        # else:
        #     return redirect("register")
    context={}
    return render(request,'login.html',context)

def logoutPage(request):
    return render(request,'login.html')
def home(request):
    user=get_user_model()
    Users=user.objects.all()
    count=Users.count()
    forms=Taskform()
    tasks=Tasks.objects.all()
    if request.method == 'POST':
        form = Taskform(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/')


    context={'tasks':tasks,'forms':forms,'count':count}
    return render(request,'home.html', context)

def editTask(request, pk):
    task=Tasks.objects.get(id=pk) #get the object(task)whose id equals to the pk
    forms=Taskform(instance=task) #instance is the task whose id is equal to pk(selected id)
    if request.method == 'POST':
        form = Taskform(request.POST, instance=task)
        if form.is_valid():
            form.save()
        return redirect('/')

    context={'forms':forms}
    return render(request, 'update.html', context)

def delTask(request, pk):
    tasks=Tasks.objects.get(id=pk)
    context={"task":tasks}

    if request.method == 'POST':
        tasks.delete()
        return redirect("/")

    return render(request, 'delete.html', context)