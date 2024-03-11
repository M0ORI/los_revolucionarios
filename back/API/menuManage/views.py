from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth.models import User

@api_view(['POST'])
def login (request):
    return Response({'login'})

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.delete()
        return Response(serializer.data)
    return Response({})

@api_view(['POST'])
def profile(request):
    return Response({})

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    return Response(users)