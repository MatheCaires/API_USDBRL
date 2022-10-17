from django.db import models

# Create your models here.

class Tabela_cotas(models.Model):
    odata = models.DateField(primary_key=True)
    cotacaoCompra = models.CharField(max_length=500)
    cotacaoVenda = models.CharField(max_length=500)

    def __str__(self):
        return self.odata
