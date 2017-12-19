from mongoengine import *


class Users(Document):
    user_name = StringField()
    email = EmailField()
    password = StringField()
    is_active=BooleanField(default=False)
