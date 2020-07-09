import { mainPage, mainSection } from "./mainPage";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";

mainPage();

const title = document.querySelector("#mainTitle");
title.addEventListener("click", () => {
  resetTabContent();
  mainSection();
});

const menuNav = document.querySelector("#menuTab");
menuNav.addEventListener("click", () => {
  resetTabContent();
  menuPage();
});

const contactNav = document.querySelector("#contactTab");
contactNav.addEventListener("click", () => {
  resetTabContent();
  contactPage();
});

function resetTabContent() {
  const tabContent = document.querySelector("#tabContent");
  while (tabContent.childNodes.length > 0) {
    tabContent.removeChild(tabContent.lastChild);
  }
}
