from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ClassSerializer, PostSerializer
from .models import Class, Post


class ClassView(viewsets.ModelViewSet):
    serializer_class = ClassSerializer
    queryset = Class.objects.all()


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()