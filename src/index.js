const contentDiv = document.getElementById("content");

const header = document.createElement("header");
const main = document.createElement("main");
const title = document.createElement("h2");
title.textContent = "Cookie Pie";
const cta = document.createElement("h1");
cta.textContent = "Another One!";
const cookieImage = document.createElement("img");
cookieImage.src = "cookie-unsplash.jpg";
const ctaBtn = document.createElement("button");
ctaBtn.textContent = "Check out the menu";
const infoCopy = document.createElement("p");
infoCopy.textContent =
  "Our mission is to bring peace by virtue of desserts. See for yourself.";

const nav = document.createElement("nav");
const ul = document.createElement("ul");
const menuNav = document.createElement("li");
menuNav.textContent = "Menu";
const contactNav = document.createElement("li");
contactNav.textContent = "Contact";

ul.appendChild(menuNav);
ul.appendChild(contactNav);
nav.appendChild(ul);
header.appendChild(title);
header.appendChild(nav);

main.appendChild(cta);
main.appendChild(infoCopy);
main.appendChild(ctaBtn);
main.appendChild(cookieImage);

contentDiv.appendChild(header);
contentDiv.appendChild(main);
