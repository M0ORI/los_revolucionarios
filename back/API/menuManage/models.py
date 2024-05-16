from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.core.exceptions import ValidationError

class Platillo(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=200)
    imagen = models.ImageField(upload_to='menu', blank=True, null=True)

    def __str__(self):
        return self.nombre
    
class Categoria(models.Model):
    nombre = models.CharField(max_length=50)
    platillos = models.ManyToManyField(Platillo, related_name='categorias')

    def __str__(self):
        return self.nombre

class Carrusel(models.Model):
    imagen = models.ImageField(upload_to='carrusel')
    titulo = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=200)

    def __str__(self):
        return self.titulo

@receiver(pre_save, sender=Carrusel)
def limit_carrusel(sender, instance, **kwargs):
    if Carrusel.objects.count() >= 5 and not instance.id:
        raise ValidationError('Solo se pueden tener 5 objetos en el carrusel')


class Presentacion(models.Model):
    platillo = models.ForeignKey(Platillo, on_delete=models.CASCADE)

    def __str__(self):
        return self.platillo.nombre + ' presentacion'
    
@receiver(pre_save, sender=Presentacion)
def limit_presentacion(sender, instance, **kwargs):
    if Presentacion.objects.count() >= 6 and not instance.id:
        raise ValidationError('Solo se pueden tener 6 presentaciones por platillo')