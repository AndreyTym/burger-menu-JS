const burger = document.querySelector(".burger__menu");
const list = document.querySelector(".list");
const hero = document.querySelector(".hero");
const logo = document.querySelector(".logo");
const heroCover = document.querySelector(".hero__cover");
const listLinkActive = document.querySelector(".list__link_active");
const container320 = document.querySelector(".container_320");

let elementsArr = [listLinkActive, heroCover, burger];

elementsArr.forEach((e) => {
  e.addEventListener("click", () => {
    burger.classList.toggle("burger__menu_active");
    list.classList.toggle("list_active");
    hero.classList.toggle("hero_active");
    logo.classList.toggle("logo_active");
    heroCover.classList.toggle("hero__cover_active");
    container320.classList.toggle("container_320_active");
  });
});
