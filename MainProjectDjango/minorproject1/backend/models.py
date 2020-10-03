from django.db import models
# Create your models here.
class Mask(models.Model):
    with_mask = models.IntegerField(null=False,default=0)
    without_mask = models.IntegerField(null=False,default=0)
    date_time = models.CharField(max_length=50,null=False,default='')
    day_week = models.CharField(max_length=50,null=False,default='')
    name = models.CharField(max_length=20,null=False,default='')
    def __str__(self):
         title = self.date_time + ' '+ self.day_week
         return title


