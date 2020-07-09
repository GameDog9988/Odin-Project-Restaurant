const contentDiv = document.getElementById("content");

const mainPage = () => {
  const header = () => {
    const header = document.createElement("header");

    const title = document.createElement("h2");
    title.setAttribute("id", "mainTitle");
    title.textContent = "Cookie Pie";

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const menuNav = document.createElement("li");
    menuNav.textContent = "Menu";
    menuNav.setAttribute("id", "menuTab");
    const contactNav = document.createElement("li");
    contactNav.textContent = "Contact";
    contactNav.setAttribute("id", "contactTab");

    ul.appendChild(menuNav);
    ul.appendChild(contactNav);
    nav.appendChild(ul);
    header.appendChild(title);
    header.appendChild(nav);
    contentDiv.appendChild(header);
  };

  const tabContent = () => {
    const tabContent = document.createElement("main");
    tabContent.setAttribute("id", "tabContent");
    contentDiv.appendChild(tabContent);
  };

  header();
  tabContent();
  mainSection();
};

const mainSection = () => {
  const main = document.createElement("main");

  const cta = document.createElement("h1");
  cta.textContent = "Another One!";

  const cookieImage = document.createElement("img");
  cookieImage.src = "cookie-unsplash.jpg";

  const ctaBtn = document.createElement("button");
  ctaBtn.textContent = "Check out the menu";

  const infoCopy = document.createElement("p");
  infoCopy.textContent =
    "Our mission is to bring peace by virtue of desserts. See for yourself.";

  main.appendChild(cta);
  main.appendChild(infoCopy);
  main.appendChild(ctaBtn);
  main.appendChild(cookieImage);

  tabContent.appendChild(main);
};

export { mainPage, mainSection };
