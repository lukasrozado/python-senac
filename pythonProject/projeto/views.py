from django.http import HttpResponse
import socket


def home(request):
    hostname = socket.gethostname()
    message = f"Olá visitante de {hostname} - create by Lukas"
    message = ("<h1>Lukas</h1>")
    return HttpResponse(message)
