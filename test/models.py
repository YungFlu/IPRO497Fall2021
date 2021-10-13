from django.db import models


class Class(models.Model):
    # id = models.AutoField(primary_key=True)
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("name",)


class Post(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=120)
    contents = models.CharField(max_length=1000)
    Class = models.ForeignKey(
        Class, on_delete=models.CASCADE, related_name="class+"
    )

    def __str(self):
        return self.name

    class Meta:
        ordering = ("name",)
