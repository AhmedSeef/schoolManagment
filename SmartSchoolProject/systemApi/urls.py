from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .apiviews import UserViewSet, LoginView
from . import views 

# Define routes
router = DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path("", views.index, name="index"),
    path("login/", LoginView.as_view(), name="login"),
]

urlpatterns += router.urls