import "../css/home.css";
import { headerCreator } from "../components/header";
import { paragraphCreator } from "../utility";
import { menuContainer } from "./menu";
import { contactContainer } from "./contact";

const bodyClass = document.createElement("div");
bodyClass.setAttribute("class", "home-body");

paragraphCreator("welcome", bodyClass, "Welcome to Just Delicious Resturant");
paragraphCreator("eat-healthy", bodyClass, "Eat Healthy and Natural Food");
paragraphCreator(
  "about-us",
  bodyClass,
  `Just Delicious is a resturant, bar and coffee roastery. We have awesome recipes and the most talented chefs in town. We
          promise to offer you the best experience you can ever wish from a resturant. Thank you for visiting our site!`
);

function container() {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  document.body.appendChild(container);
  const headerVariable = headerCreator();
  container.appendChild(headerVariable);
  headerVariable.insertAdjacentElement("afterend", bodyClass);

  const divs = document.createElement("div");
  divs.setAttribute("class", "buttons");
  bodyClass.appendChild(divs);

  let buttons = [
    { url: "./runMenu.js", text: "OUR MENU", id: "menu-btn" },
    { url: "./runContact.js", text: "GET IN TOUCH", id: "contact-btn" },
  ];

  for (const element of buttons) {
    const btn = document.createElement("button");
    divs.appendChild(btn);
    btn.textContent = `${element.text}`;
    btn.id = `${element.id}`;
    btn.onclick = function () {
      if (btn.textContent === "OUR MENU") {
        const menuContainerElement = menuContainer();
        document.body.removeChild(container);
        document.body.appendChild(menuContainerElement);

        const checkMenu = document.querySelectorAll(".menu-picks");
        if (checkMenu.length !== 8) {
          for (let i = 8; i < checkMenu.length; i++) {
            checkMenu[i].remove();
          }
        }
      }
      if (btn.textContent === "GET IN TOUCH") {
        const contactContainerElement = contactContainer();
        document.body.removeChild(container);
        document.body.appendChild(contactContainerElement);

        const checkAddress = document.querySelectorAll(".address");
        if (checkAddress.length !== 1) {
          for (let i = 1; i < checkAddress.length; i++) {
            checkAddress[i].remove();
          }
        }
        const checkForm = document.querySelectorAll(".user-details-form");
        if (checkForm.length !== 1) {
          for (let i = 1; i < checkForm.length; i++) {
            checkForm[i].remove();
          }
        }
      }
    };
  }
  return container;
}

export { bodyClass, container };
