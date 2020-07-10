const contactPage = () => {
  const tabContent = document.querySelector("#tabContent");
  const contactContainer = document.createElement("div");

  contactContainer.setAttribute("class", "contact-container");

  const contact = [
    "Cookie Pie",
    "2848 Connecticut Avenue",
    "Pittsburgh, PA 15216",
    "412-576-2807",
    "alex@grattan.me",
  ];

  contact.forEach((line) => {
    const contactInfo = document.createElement("p");
    contactInfo.textContent = line;

    contactContainer.appendChild(contactInfo);
  });
  tabContent.appendChild(contactContainer);
};

export { contactPage };
