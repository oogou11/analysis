from django.http import HttpResponse
from django.template import loader

def error_404(request):
    template = loader.get_template('error/error_404.html')
    context = {
        'error': '404 Error'
    }
    return HttpResponse(template.render(context, request))


def error_500(request):
    template = loader.get_template('error/error_500.html')
    context = {
        'error': '500 Error'
    }
    return HttpResponse(template.render(context, request))