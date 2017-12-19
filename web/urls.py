from django.conf.urls import url  
from .route import customer


urlpatterns = [   
    url(r'^register/$', customer.RegisterView.as_view() , name='register'),
    url(r'^login/$',customer.login, name='login'),
] 
