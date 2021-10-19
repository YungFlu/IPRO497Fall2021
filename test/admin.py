from django.contrib import admin
from .models import Classes
from .models import Posts


class ClassesAdmin(admin.ModelAdmin):
    list_display = ("classCode", "department","className","classDesc","classCreds","classPrereqs")


class PostsAdmin(admin.ModelAdmin):
    list_display = ("postID", "postTitle", "postText","author","timestmp")


admin.site.register(Classes, ClassesAdmin)
admin.site.register(Posts, PostsAdmin)