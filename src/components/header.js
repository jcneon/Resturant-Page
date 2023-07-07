import { menuContainer } from "../pages/menu";
import { container } from "../pages/home";
import { contactContainer } from "../pages/contact";

function headerParagraph(parentContainer) {
  const headerParagraph = document.createElement("p");
  headerParagraph.setAttribute("id", "header-text");
  headerParagraph.textContent = `Just Delicious`;
  parentContainer.appendChild(headerParagraph);
}

let link = [
  { url: "../pages/home.js", text: "HOME", id: "home" },
  { url: "../pages/menu.js", text: "MENU", id: "menu" },
  { url: "../pages/contact.js", text: "CONTACT", id: "contact" },
];

function headerLinks(parentContainer) {
  const ul = document.createElement("ul");
  link.forEach((link) => {
    let listItem = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.text;
    anchor.id = link.id;
    anchor.page = link.page;
    if (anchor.textContent === "HOME") {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const removeContainer = document.querySelector(".container");
        document.body.removeChild(removeContainer);
        const newHomeContainerElement = container();
        document.body.appendChild(newHomeContainerElement);

        console.log(document.querySelectorAll(".buttons"));
        const checkButton = document.querySelectorAll(".buttons");
        if (checkButton.length !== 1) {
          checkButton[0].remove();
        }
      });
    }
    if (anchor.textContent === "MENU") {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const removeContainer = document.querySelector(".container");
        document.body.removeChild(removeContainer);
        const newMenuContainerElement = menuContainer();
        document.body.appendChild(newMenuContainerElement);
        const checkMenu = document.querySelectorAll(".menu-picks");
        if (checkMenu.length !== 8) {
          for (let i = 8; i < checkMenu.length; i++) {
            checkMenu[i].remove();
          }
        }
      });
    }
    if (anchor.textContent === "CONTACT") {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const removeContainer = document.querySelector(".container");
        document.body.removeChild(removeContainer);
        const newContactContainerElement = contactContainer();
        document.body.appendChild(newContactContainerElement);
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
      });
    }
    listItem.appendChild(anchor);
    ul.appendChild(listItem);
  });

  parentContainer.appendChild(ul);
}

function headerCreator() {
  const header = document.createElement("div");
  header.setAttribute("class", "header");
  headerParagraph(header);
  headerLinks(header);
  return header;
}

export { headerCreator };
