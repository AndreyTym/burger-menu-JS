const burger = document.querySelector(".burger__menu");
const list = document.querySelector(".list");
const notOnly = document.querySelector(".not-only");
const logo = document.querySelector(".logo");
const notOnlyOverlay = document.querySelector(".not-only__overlay");
const listLinkActive = document.querySelector(".list__link_active");
const container320 = document.querySelector(".container_320");

let elementsArr = [listLinkActive, notOnlyOverlay, burger];

elementsArr.forEach((e) => {
  e.addEventListener("click", () => {
    burger.classList.toggle("burger__menu_active");
    list.classList.toggle("list_active");
    notOnly.classList.toggle("not-only_active");
    logo.classList.toggle("logo_active");
    notOnlyOverlay.classList.toggle("not-only__overlay_active");
    container320.classList.toggle("container_320_active");
  });
});
