from django.urls import path
from .views import memory_game_view

urlpatterns = [
    path('', memory_game_view, name='memory_game'),
]
