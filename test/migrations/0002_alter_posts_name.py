# Generated by Django 3.2.8 on 2021-10-15 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('test', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='name',
            field=models.CharField(max_length=120),
        ),
    ]
