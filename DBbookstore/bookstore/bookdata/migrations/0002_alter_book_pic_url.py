# Generated by Django 3.2.9 on 2021-11-27 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookdata', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='pic_url',
            field=models.CharField(max_length=90),
        ),
    ]
