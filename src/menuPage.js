const menuPage = () => {
  const tabContent = document.querySelector("#tabContent");

  const cookies = [
    {
      name: "Chocolate Chip Cookie",
      price: "$3",
      description: "The ultimate classic for classic folk",
    },
    {
      name: "Supreme Cookie",
      price: "$5",
      description: "It got everything baby",
    },
    {
      name: "Snickerdoodle",
      price: "3",
      description: "A modern take on your Grandma's favorite",
    },
    {
      name: "Milk",
      price: "$2",
      description: "Just milk",
    },
    {
      name: "Almondmilk",
      price: "$2",
      description: "This the stuff my parents drink",
    },
    {
      name: "Iced Coffee",
      price: "$4",
      description: "Gives a little pep in your step",
    },
  ];

  const createMenuContainer = () => {
    const menuTitle = document.createElement("h1");
    const menuContainer = document.createElement("main");

    menuTitle.setAttribute("id", "menuTitle");
    menuTitle.textContent = "Menu";
    menuContainer.setAttribute("id", "menuContainer");

    tabContent.appendChild(menuTitle);
    tabContent.appendChild(menuContainer);

    const createMenuItems = () => {
      for (let i = 0; i < cookies.length; i++) {
        const menuCard = document.createElement("div");

        menuCard.classList.add("menu-card");
        menuCard.setAttribute(
          "data-order",
          `${menuContainer.childNodes.length}`
        );
        tabContent.appendChild(menuCard);
      }
    };
    createMenuItems();
  };
  createMenuContainer();

  const menuItems = document.querySelectorAll(".menu-card");
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("card-hover");

      const text1 = document.createElement("div");
      text1.textContent = cookies[item.dataset.order].name;
      text1.classList.add("card-info");
      text1.style.cssText =
        "top: 15%; left: 50%; transform: translate(-50%, -50%); border-bottom: 1px solid";
      item.appendChild(text1);

      const text2 = document.createElement("div");
      text2.textContent = cookies[item.dataset.order].price;
      text2.classList.add("card-info");
      text2.style.cssText =
        "top: 45%; left: 50%; transform: translate(-50%, -50%);";
      item.appendChild(text2);

      const text3 = document.createElement("div");
      text3.textContent = cookies[item.dataset.order].description;
      text3.classList.add("card-info");
      text3.style.cssText =
        "top: 75%; left: 50%; transform: translate(-50%, -50%);";
      item.appendChild(text3);
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("card-hover");
      while (item.childNodes.length > 1) {
        item.removeChild(item.lastChild);
      }
    });
  });
};

export { menuPage };
