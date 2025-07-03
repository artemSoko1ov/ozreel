const cards = document.querySelectorAll(".carousel__card");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex = (newIndex + cards.length) % cards.length;
    cards.forEach((card, i) => {
        const offset = (i - currentIndex + cards.length) % cards.length;

        card.classList.remove(
            "center",
            "left-1",
            "left-2",
            "right-1",
            "right-2"
        );

        if (offset === 0) {
            card.classList.add("center");
        } else if (offset === 1) {
            card.classList.add("right-1");
        } else if (offset === 2) {
            card.classList.add("right-2");
        } else if (offset === 3) {
            card.classList.add("left-2");
        } else if (offset === 4) {
            card.classList.add("left-1");
        }

    });

    setTimeout(() => {
        isAnimating = false;
    }, 800);
}

cards.forEach((card, i) => {
    card.addEventListener("click", (e) => {
        updateCarousel(i);
    });
});
updateCarousel(0);