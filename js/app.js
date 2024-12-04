/*------------------------------------ SHOW NAVIGATION BAR MENU ---------------------------------------*/
const navBarMenuToggleBox = document.querySelector(".toggle-box");
const navBarMenu = document.querySelector(".nav-menu");

navBarMenuToggleBox.addEventListener("click", () => {
  navBarMenu.style.display =
    navBarMenu.style.display === "block" ? "none" : "block";
});
