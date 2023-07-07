import "../css/contact.css";
import { headerCreator } from "../components/header";
import { paragraphCreator } from "../utility";
import { img9 } from "../imageURL";
import { createImage } from "../imageURL";

const bodyClass = document.createElement("div");
bodyClass.setAttribute("class", "contact-body");

function contactContainer() {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  document.body.appendChild(container);
  const headerVariable = headerCreator();
  container.appendChild(headerVariable);
  headerVariable.insertAdjacentElement("afterend", bodyClass);
  const address = document.createElement("div");
  address.setAttribute("class", "address");
  bodyClass.appendChild(address);
  paragraphCreator("brand-name", address, "Just Delicious");
  const rAddress = document.createElement("div");
  rAddress.setAttribute("class", "resturant-address");
  address.appendChild(rAddress);
  paragraphCreator(null, rAddress, "432 Oak Street Anytown, USA 12345");
  paragraphCreator(null, rAddress, "(555) 123-4567, (555) 987-6543");

  const userDetailsForm = document.createElement("div");
  userDetailsForm.setAttribute("class", "user-details-form");
  bodyClass.appendChild(userDetailsForm);
  // form title and subtitle creation
  const forms = document.createElement("form");
  forms.action = "get";
  userDetailsForm.appendChild(forms);
  const formAction = document.createElement("div");
  formAction.setAttribute("class", "form-actions");
  forms.appendChild(formAction);

  const formChild1 = document.createElement("div");
  formChild1.setAttribute("class", "form-child");
  const nameLabel1 = document.createElement("label");
  nameLabel1.htmlFor = "name";
  nameLabel1.textContent = "Name: ";
  formChild1.appendChild(nameLabel1);
  const nameInput1 = document.createElement("input");
  nameInput1.type = "text";
  nameInput1.id = "user-name";
  nameInput1.name = "user-name";
  nameLabel1.insertAdjacentElement("afterend", nameInput1);
  formAction.appendChild(formChild1);

  const formChild2 = document.createElement("div");
  formChild2.setAttribute("class", "form-child");
  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "Email: ";
  formChild2.appendChild(emailLabel);
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "user-email";
  emailInput.name = "user-email";
  emailLabel.insertAdjacentElement("afterend", emailInput);
  formAction.appendChild(formChild2);

  const formChild3 = document.createElement("div");
  formChild3.setAttribute("class", "form-child");
  const textArea = document.createElement("label");
  textArea.htmlFor = "message";
  textArea.textContent = "Message:";
  formChild3.appendChild(textArea);
  const textAreaInput = document.createElement("textarea");
  textAreaInput.id = "user-message";
  textAreaInput.name = "user-message";
  textAreaInput.cols = 36;
  textAreaInput.rows = 10;
  textArea.insertAdjacentElement("afterend", textAreaInput);
  formAction.appendChild(formChild3);

  const subBtn = document.createElement("button");
  subBtn.textContent = "Envoyer";
  formAction.appendChild(subBtn);

  const locationImage = createImage(`${img9}`, "Resturant Location", 700, 1600);
  locationImage.setAttribute("class", "location");
  forms.appendChild(locationImage);
  return container;
}

export { contactContainer };
