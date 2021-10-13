from rest_framework import serializers
from .models import Class, Post


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ("id", "name")


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("id", "name", "contents")
