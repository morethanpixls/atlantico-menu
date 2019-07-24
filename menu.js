// Selectors
let toggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu");

// Toggle Menu
function showMenu() {
    menu.classList.toggle("is-active");
}

// Click
toggle.addEventListener("click", showMenu);
