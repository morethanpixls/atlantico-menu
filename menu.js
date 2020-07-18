// ATLANTICO MENU
// Documentation
// "containerSelector" taks any class or id for the parent div
// "toggleSelector" takes any class or id for the child div
// "position" should have any of the following values: top, right, bottom, left

(function atlanticoMenu(
	containerSelector = ".menu",
	toggleSelector = ".menu-toggle",
	position = "left",
) {
	const toggle = document.querySelector(toggleSelector);
	const menu = document.querySelector(containerSelector);

	// Toggle Menu
	function showMenu() {
		menu.classList.toggle("is-active");
	}

	// Click
	toggle.addEventListener("click", showMenu);
})();
