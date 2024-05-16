from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PlatilloSerializer, CategoriaSerializer, CarruselSerializer, PresentacionSerializer
from django.contrib.auth.models import User
from .models import Platillo, Categoria, Carrusel, Presentacion

@api_view(['GET'])
def getPlatillos(request):
    platillos = Platillo.objects.all()
    serializer = PlatilloSerializer(platillos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCategorias(request):
    categorias = Categoria.objects.all()
    serializer = CategoriaSerializer(categorias, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCarrusel(request):
    carrusel = Carrusel.objects.all()
    serializer = CarruselSerializer(carrusel, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPresentaciones(request):
    presentaciones = Presentacion.objects.all()
    serializer = PresentacionSerializer(presentaciones, many=True)
    return Response(serializer.data)