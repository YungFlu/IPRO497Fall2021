from django.contrib import admin
from .models import Class
from .models import Post


class ClassAdmin(admin.ModelAdmin):
    list_display = ("id", "name")


class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "contents")


admin.site.register(Class, ClassAdmin)
admin.site.register(Post, PostAdmin)