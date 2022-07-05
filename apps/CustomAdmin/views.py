from django.http import JsonResponse
from django.shortcuts import render
from django.views import View


class InfoAddress(View):
    @staticmethod
    def get(request):
        return render(request, 'CustomAdmin/info_address.html')