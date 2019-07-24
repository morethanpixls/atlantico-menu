// Selectors
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Toggle Menu
function showMenu() {
    menu.classList.toggle("is-active");
}

// Click
toggle.addEventListener("click", showMenu);
