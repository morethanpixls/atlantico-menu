// Selectors
let toggle = document.querySelector(".menu-toggle");
let menuWrapper = document.querySelector(".menu");

// Toggle Menu
function showMenu() {
    menuWrapper.classList.toggle("is-active");
}

// Click
toggle.addEventListener("click", showMenu);
