/*------------------------------------ SHOW NAVIGATION BAR MENU ---------------------------------------*/
const navBarMenuItems = [
  {
    title: "Home",
    link: "#home",
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

//build the navbar menu
const navBarMenu = document.querySelector(".nav-menu");

navBarMenuItems.forEach((item) => {
  const menuItem = document.createElement("li");
  menuItem.innerHTML = `<a href="${item.link}">${item.title}</a>`;
  navBarMenu.appendChild(menuItem);
});

/*------------------------------------ SHOW NAVIGATION BAR MENU ON TABLET AND MOBILE ------------------*/
const navBarMenuToggleBox = document.querySelector(".toggle-box");

navBarMenuToggleBox.addEventListener("click", () => {
  navBarMenu.style.display =
    navBarMenu.style.display === "block" ? "none" : "block";
});

/*------------------------------------ HIGHLIGHT NAVIGATION lINK SECTION AND SMOOTH SCROLLING ---------*/
const sections = document.querySelectorAll("section");
const navBarLinks = document.querySelectorAll(".nav-menu a");

// smooth scrolling when the navigation link is clicked
navBarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // get the section id
    const targetSectionId = event.target.getAttribute("href").slice(1);
    // get the targeted section
    const targetSection = document.getElementById(targetSectionId);
    // for smooth scrolling
    targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
