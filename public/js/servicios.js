document.addEventListener("DOMContentLoaded", function () {
    const showInfoButtons = document.querySelectorAll(".btn-show-info");
    showInfoButtons.forEach(button => {
        button.addEventListener("click", function () {
            const card = button.closest(".card");
            const cardInfo = card.querySelector(".card-info");

            cardInfo.style.display = cardInfo.style.display === "none" ? "block" : "none";

            if (cardInfo.style.display === "block") {
                card.classList.add("show-info"); 
            } else {
                card.classList.remove("show-info"); 
            }
        });
    });
});

