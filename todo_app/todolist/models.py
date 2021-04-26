from django.db import models

# Create your models here.
class Tasks(models.Model):
    title=models.CharField(max_length=200)
    done=models.BooleanField(default=False)
    createdDate=models.DateTimeField(auto_now_add=True) #to know when each item is created

    def __str__(self): 
        return self.title #this function return the name of the specified task

   