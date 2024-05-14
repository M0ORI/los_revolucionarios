from django.urls import path
from . import views

urlpatterns = [
    path('getPlatillos/', views.getPlatillos, name='getPlatillos'),
    path('getCategorias/', views.getCategorias, name='getCategorias'),
    path('getCarrusel/', views.getCarrusel, name='getCarrusel'),
    path('getPresentaciones/', views.getPresentaciones, name='getPresentaciones'),
]