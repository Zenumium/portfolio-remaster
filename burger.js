// Get the burger menu button and the menu
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

// Add an event listener to the burger menu button
burgerMenu.addEventListener("click", () => {
  // Toggle the open class on the burger menu button and the menu
  burgerMenu.classList.toggle("open");
  menu.classList.toggle("open");
});
