from django.contrib import admin
from .models import Platillo, Categoria, Carrusel, Presentacion

# Register your models here.
admin.site.register(Platillo)
admin.site.register(Categoria)
admin.site.register(Carrusel)
admin.site.register(Presentacion)