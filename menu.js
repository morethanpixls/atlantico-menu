// ATLANTICO MENU
// Documentation
// "containerSelector" taks any class or id for the parent div
// "toggleSelector" takes any class or id for the child div
// "position" should have any of the following values: top, right, bottom, left

(function atlanticoMenu(
	containerSelector = ".menu",
	contentSelector = ".menu-content",
	toggleSelector = ".menu-toggle",
	position = "left", // values: left, top, right, bottom
) {
	const toggle = document.querySelector(toggleSelector),
		menu = document.querySelector(containerSelector),
		menuContent = document.querySelector(contentSelector);

	let menuHeight = document.querySelector(`${contentSelector}`).clientHeight;

	// Add position class to menu
	menu.classList.add(position);

	// Convert height to negative value
	menuHeightNegative = -Math.abs(menuHeight);

	// Get menu height for position top and bottom
	if (position === "top") {
		// Set top property to calculated height value
		menuContent.style.top = `${menuHeightNegative}px`;
	} else if (position === "bottom") {
		// Set bottom property to calculated height value
		menuContent.style.bottom = `${menuHeightNegative}px`;
	}

	// Toggle Menu
	function showMenu() {
		// Show/Hide menu by toggling class
		menu.classList.toggle("is-active");

		// Set top position
		if (
			menu.classList.contains("is-active") &&
			menu.classList.contains("top")
		) {
			menuContent.style.top = "0px";
		} else if (menu.classList.contains("top")) {
			menuContent.style.top = `${menuHeightNegative}px`;
		}

		// Set bottom position
		if (
			menu.classList.contains("is-active") &&
			menu.classList.contains("bottom")
		) {
			menuContent.style.bottom = "0";
		} else if (menu.classList.contains("bottom")) {
			menuContent.style.bottom = `${menuHeightNegative}px`;
		}
	}

	// Click
	toggle.addEventListener("click", showMenu);
})();
