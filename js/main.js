const section = document.querySelector(".prodact-section");

section.addEventListener("mouseover", (e) => {
  const item = e.target.closest(".prodact__item");
  if (!item) return;
  const image = item.dataset.img;
  section.style.backgroundImage = `url(${image})`;
});

/*
document.querySelector('section').addEventListener('mouseover', function (e) {
    const item = e.target.closest('.item');
    if (!item) return;
    const image = item.dataset.img;
    this.style.background = `url(${image})`;
});


const clpsItem = document.querySelectorAll(".collapse__item");

clpsBtn.forEach((item) => {
  const clpshead = document.querySelector(".collapse__head");
  clpshead.addEventListener("click", () => {
    console.log(item);
  });
});
*/

// create coollapse
const clpsItem = document.querySelectorAll(".collapse__item");

clpsItem.forEach(function (item) {
  const clpshead = item.querySelector(".collapse__head");
  clpshead.addEventListener("click", function () {
    item.classList.toggle("show-collapse");
  });
});

// create sticky
const nav = document.querySelector(".nav");
window.addEventListener("scroll", (e) => {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// create mobile nav
const header = document.querySelector(".header");
const menu = document.querySelector(".mobile-menu");
menu.addEventListener("click", () => {
  header.classList.toggle("show-nav");
});

const navBarClose = () => {
  header.classList.remove("show-nav");
};

// create search page
const searchIcon = document.querySelector(".search-icon");
const closeBtn = document.querySelector(".close-nav");
const searchBox = document.querySelector(".search-page");
const searchOverlay = document.querySelector(".search-overlay");

searchIcon.addEventListener("click", () => {
  showNav();
});

closeBtn.addEventListener("click", () => {
  closeNav();
});

const showNav = () => {
  searchBox.style.transform = "translate(0)";
  searchOverlay.style.transform = "translate(0)";
};

const closeNav = () => {
  searchBox.style.transform = "translate(-100%)";
  searchOverlay.style.transform = "translate(-100%)";
};

/*
// add link scrolling effects
// const home = document.querySelector("#home");
// const about = document.querySelector("#about");
// const portfolio = document.querySelector("#portfolio");
// const blog = document.querySelector("#blog");
const contactBtn = document.querySelector(".contact-btn");
const contactSection = document.querySelector(".contact-section");

// home.addEventListener("click", () => {
//   header.scrollIntoView();
// });

contactBtn.addEventListener("click", () => {
  contactSection.scrollIntoView();
  const sccords = contactSection.getBoundingClientRect();
  // console.log(sccords);
  window.scrollTo(sccords.left, sccords.top - 100);
  // window.scrollTo({
  //   left: sccords.left + window.pageXOffset,
  //   top: sccords.top + window.pageYOffset - 100,
  // });
  // window.scrollTo(-100, 0);
  console.log("scroll");
});

//   console.log("scroll to cotact section");
// });

// const scroll = function (e) {};
*/

const navigation = document.querySelector(".navigation");
navigation.addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains("navigation__links")) {
    const id = e.target.getAttribute("href");
    const x = document.querySelector(id);
    const y = x.getBoundingClientRect();
    window.scrollTo({
      left: y.left + window.pageYOffset,
      top: y.top + window.pageYOffset - 100,
      behavior: "smooth",
    });
  }
});
