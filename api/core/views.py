from django.shortcuts import render
from core.models import Tabela_cotas
from rest_framework import serializers
from .models import Tabela_cotas
from .serializers import TabelaSerializer
from rest_framework import viewsets



class TabelaViewSet(viewsets.ModelViewSet):
    queryset = Tabela_cotas.objects.all()
    serializer_class = TabelaSerializer
# Create your views here.
