from django.contrib import admin
from django.urls import path
from .views import InfoAddress
from django.contrib import admin


urlpatterns = [
    path('information-address/', admin.site.admin_view(InfoAddress.as_view()), name='information_address'),
]
