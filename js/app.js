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
const navBar = document.querySelector(".navigation");
const scrollToTopButton = document.getElementById("scrollToTop");
let lastScroll = 0;
let isScrolling;

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

// change the active navigation link during scrolling and set timer for the navbar visibility
window.addEventListener("scroll", () => {
  // visible the navbar while scrolling, hide it if there's no scrolling after 3 seconds
  if (window.scrollY >= lastScroll) {
    navBar.classList.remove("hidden");
    navBar.classList.add("visible");
  } else {
    navBar.classList.remove("visible");
    navBar.classList.add("hidden");
  }
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    navBar.classList.remove("visible");
    navBar.classList.add("hidden");
  }, 3000);
  // visible the scroll to top button
  if (window.scrollY > window.innerHeight) {
    scrollToTop.classList.add("visible");
  } else {
    scrollToTop.classList.remove("visible");
  }
  // track navigation links active during scrolling
  sections.forEach((section) => {
    // use getBoundingClientRect() to get the section position relative to the viewport
    const sectionPos = section.getBoundingClientRect();
    // if the section is in the viewport, change the active link
    // I've added this to ensure that the link for the section is still active when the half of the section is in the viewport
    if (
      sectionPos.top >= 0 &&
      sectionPos.top <= window.innerHeight * 0.5 &&
      sectionPos.bottom > 0
    ) {
      // remove the active class from all navigation links
      navBarLinks.forEach((link) => {
        link.classList.remove("active");
      });
      // add the active class to the current navigation link
      const currentSectionLink = document.querySelector(
        `a[href="#${section.id}"]`
      );
      currentSectionLink.classList.add("active");
    }
  });
});

// scroll to top button event
scrollToTop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
