from django.db import models


class Classes(models.Model):
    # id = models.AutoField(primary_key=True)
    classCode = models.CharField(max_length=40,primary_key=True)
    className = models.CharField(max_length=255)
    classDesc = models.CharField(max_length=4095)
    classCreds = models.CharField(max_length=255)
    classPrereqs = models.CharField(max_length=255)

    def __str__(self):
        return self.className

    class Meta:
        ordering = ("classCode","className","classDesc", "classCreds", "classPrereqs")


class Posts(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=120)
    contents = models.CharField(max_length=1000)
    Classes = models.ForeignKey(
        Classes, on_delete=models.CASCADE, related_name="Classes+"
    )

    def __str(self):
        return self.name

    class Meta:
        ordering = ("name",)
