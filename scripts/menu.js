let menuButton = document.getElementById("menu-open");
let menuCloseBtn = document.getElementById("menu-close");
let nav = document.getElementById("navbar");

menuButton.addEventListener("click", () => openNav());
menuCloseBtn.addEventListener("click", () => closeNav());

function openNav() {
  nav.style.width = "350px";
}
function closeNav() {
  nav.style.width = "0px";
}
