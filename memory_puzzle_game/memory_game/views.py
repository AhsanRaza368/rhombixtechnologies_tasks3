from django.shortcuts import render
import random

def memory_game_view(request):
    # Create a shuffled list of matching pairs
    icons = ["🍎", "🍌", "🍇", "🍉", "🍊", "🍒", "🥑", "🍍"] * 2
    random.shuffle(icons)

    return render(request, 'memory_game/game.html', {'icons': icons})
