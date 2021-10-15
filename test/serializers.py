from rest_framework import serializers
from .models import Classes, Posts


class ClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = ("id", "name")


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("id", "name", "contents")
