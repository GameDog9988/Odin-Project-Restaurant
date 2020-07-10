const contactPage = () => {
  const tabContent = document.querySelector("#tabContent");

  const contact = [
    "Cookie Pie",
    "2848 Connecticut Avenue",
    "Pittsburgh, PA 15216",
    "412-576-2807",
    "alex@grattan.me",
  ];

  contact.forEach(
    (line) =>
      (_createElement(parent, "p", {
        class: "contact-info",
      }).textContent = line)
  );
};

export { contactPage };
