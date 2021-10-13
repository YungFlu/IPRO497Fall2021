from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40)),
                ('contents', models.CharField(max_length=1000)),
                ('class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='class+', to='test.class')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]
