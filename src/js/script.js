import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";

window.addEventListener("DOMContentLoaded", () => {
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal");
  timer(".timer", "2025-02-18");
  cards();
  forms("form");
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    slide: ".offer__slide",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  calc();
});
