from rest_framework import serializers
from .models import Platillo, Categoria, Carrusel, Presentacion

class PlatilloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platillo
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    platillos = PlatilloSerializer(many=True)

    class Meta:
        model = Categoria
        fields = '__all__'

class CarruselSerializer(serializers.ModelSerializer):

    class Meta:
        model = Carrusel
        fields = ['imagen']
    
class PresentacionSerializer(serializers.ModelSerializer):
    platillo = PlatilloSerializer()

    class Meta:
        model = Presentacion
        fields = '__all__'