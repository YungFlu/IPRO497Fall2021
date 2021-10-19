from django.db import models
import datetime


class Classes(models.Model):
    # id = models.AutoField(primary_key=True)
    classCode = models.CharField(primary_key=True,max_length=40)
    department = models.CharField(max_length=40)
    className = models.CharField(max_length=255)
    classDesc = models.CharField(max_length=4095)
    classCreds = models.CharField(max_length=255)
    classPrereqs = models.CharField(max_length=255)

    def __str__(self):
        return self.classCode

    class Meta:
        ordering = ("classCode",)


class Posts(models.Model):
    postID = models.IntegerField(primary_key=True)
    postTitle = models.CharField(max_length=255)
    postText = models.CharField(max_length=4095)
    author = models.CharField(max_length=255)
    timestmp = models.DateField(("Date"), default=datetime.date.today)
    classes = models.ForeignKey(
        Classes, on_delete=models.CASCADE
        )
    def __str(self):
        return self.postTitle

    class Meta:
        ordering = ("postTitle",)
