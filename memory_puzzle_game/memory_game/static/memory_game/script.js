document.addEventListener("DOMContentLoaded", () => {
    let cards = document.querySelectorAll(".card");
    let flippedCards = [];
    let matchedCards = 0;

    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (flippedCards.length < 2 && !card.classList.contains("flip")) {
                card.classList.add("flip");
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 1000);
                }
            }
        });
    });

    function checkMatch() {
        let [card1, card2] = flippedCards;
        let icon1 = card1.dataset.icon;
        let icon2 = card2.dataset.icon;

        if (icon1 === icon2) {
            matchedCards += 2;
        } else {
            card1.classList.remove("flip");
            card2.classList.remove("flip");
        }

        flippedCards = [];

        if (matchedCards === cards.length) {
            alert("Congratulations! You won!");
        }
    }
});
