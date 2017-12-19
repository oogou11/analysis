from django.core.urlresolvers import reverse_lazy
from django.views.generic.edit import FormView
from django.shortcuts import render 

from ..form.customer_form import RegisterForm


class RegisterView(FormView):
    template_name = 'customer/register.html'
    form_class = RegisterForm
    success_url = reverse_lazy('login')

    def form_valid(self, form):
        form.save() 
        return super(RegisterView, self).form_valid(form)


def login(request):
    context = {}
    return render(request, 'customer/login.html', context)
