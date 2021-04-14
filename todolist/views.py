from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Tasks
from .form import *
def home(request):

    forms=Taskform()
    tasks=Tasks.objects.all()
    if request.method == 'POST':
        form = Taskform(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/')


    context={'tasks':tasks,'forms':forms}
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
    return render(request, 'updated.html', context)

def delTask(request, pk):
    tasks=Tasks.objects.get(id=pk)
    context={"task":tasks}

    if request.method == 'POST':
        tasks.delete()
        return redirect("/")

    return render(request, 'delete.html', context)