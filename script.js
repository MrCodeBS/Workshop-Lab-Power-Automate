function toggleSection(element) {
  // Close all other sections
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    if (card !== element && card.classList.contains("active")) {
      card.classList.remove("active");
    }
  });

  // Toggle current section
  element.classList.toggle("active");
}

// Open first section by default
document.addEventListener("DOMContentLoaded", function () {
  const firstCard = document.querySelector(".card");
  if (firstCard) {
    firstCard.classList.add("active");
  }
});
