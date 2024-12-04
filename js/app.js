/*------------------------------------ SHOW NAVIGATION BAR MENU ---------------------------------------*/
const navBarMenuItems = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Performers",
    link: "#performers",
  },
  {
    title: "Shows",
    link: "#shows",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const navBarMenu = document.querySelector(".nav-menu");

navBarMenuItems.forEach((item) => {
  const menuItem = document.createElement("li");
  menuItem.innerHTML = `<a href="${item.link}">${item.title}</a>`;
  navBarMenu.appendChild(menuItem);
});

/*------------------------------------ SHOW NAVIGATION BAR MENU ON TABLET AND MOBILE ---------------------------------------*/
const navBarMenuToggleBox = document.querySelector(".toggle-box");

navBarMenuToggleBox.addEventListener("click", () => {
  navBarMenu.style.display =
    navBarMenu.style.display === "block" ? "none" : "block";
});
