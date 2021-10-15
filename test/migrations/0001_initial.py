from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Classes',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40)),
                ('contents', models.CharField(max_length=1000)),
                ('Classes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Classes+', to='test.Classes')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]
