from dataclasses import field
from rest_framework import serializers
from .models import Tabela_cotas

class TabelaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tabela_cotas
        fields = '__all__'