//!text chaner
const jobs = ["Teacher", "Developer", "Freelancer", "Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

let textShow = document.querySelector(".hero-content .text-holder p");
let textShow2 = document.querySelector(".right h2 span");

let portfolioNav = document.querySelectorAll(".navigation-bar li");
let portfolioNavArray = Array.from(portfolioNav);
let portfolioContent = document.querySelectorAll(".items-holder > div");
let portfolioContentArray = Array.from(portfolioContent);

let nav = document.querySelector("nav");
let navIcon = document.querySelector("nav .logo i");
let navList = document.querySelectorAll("nav ul li a");
window.onload = () => {
  changeHeroJob();
  getDate();
  showPortfolio();
};
window.onscroll = () => {
  changerNav();
};
function changerNav() {
  if (scrollY >= 150) {
    nav.style.backgroundColor = "#FFF";
    navIcon.style.color = "#000";
    navList.forEach((a) => {
      a.style.color = "#000";
    });
  } else {
    nav.style.backgroundColor = "transparent";
    navIcon.style.color = "#FFF";
    navList.forEach((a) => {
      a.style.color = "#FFF";
    });
  }
}

function getDate() {
  let x = new Date(),
    y = x.getFullYear();

  let a = new Date("April 16, 1998"),
    b = a.getUTCFullYear();
  document.getElementById("age").textContent = `${y - b}`;
}

function changeHeroJob() {
  if (count === jobs.length) {
    count = 0;
  }
  currentText = jobs[count];
  letter = currentText.slice(0, ++index);
  textShow.textContent = `I'm a ${letter}`;
  textShow2.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(changeHeroJob, 300);
}
portfolioContentArray[0].style.display = "flex";
function showPortfolio() {
  portfolioNavArray.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      portfolioContentArray.forEach((div) => {
        div.style.display = "none";
      });
      document.querySelector(e.currentTarget.dataset.cont).style.display =
        "flex";
    });
  });
}
