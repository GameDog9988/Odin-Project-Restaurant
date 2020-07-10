const menuPage = () => {
  const tabContent = document.querySelector("#tabContent");

  const cookies = [];

  const Cookie = (name, price) => {
    const getName = () => console.log(name);
    const getPrice = () => console.log(price);

    return { name, price, getName, getPrice };
  };

  function addCookieToMenu(name, price) {
    cookies.push(Cookie(name, price));
  }

  addCookieToMenu("Chocolate Chip Cookie", "$2");
  addCookieToMenu("Kitchen Sink Cookie", "$4");
  addCookieToMenu("Snickerdoodle Cookie", "$2");
  addCookieToMenu("Peanut Butter Thumbdrop", "$3");

  const createMenuContainer = () => {
    const menuTitle = document.createElement("h1");
    const menuContainer = document.createElement("main");

    menuTitle.setAttribute("id", "menuTitle");
    menuTitle.textContent = "Menu";
    menuContainer.setAttribute("id", "menuContainer");

    tabContent.appendChild(menuTitle);
    tabContent.appendChild(menuContainer);

    const createMenuItems = () => {
      cookies.forEach((item) => {
        const menuCard = document.createElement("div");
        menuCard.innerHTML = `${item.name}  <br>  ${item.price}`;
        menuCard.classList.add("menu-card");
        menuContainer.appendChild(menuCard);
      });
    };
    createMenuItems();
  };
  createMenuContainer();
};

export { menuPage };
