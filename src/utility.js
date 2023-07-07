function paragraphCreator(id, parentContainer, textContent) {
  const paragraph = document.createElement("p");
  if (id) {
    paragraph.setAttribute("id", id);
  }
  paragraph.textContent = textContent;
  parentContainer.appendChild(paragraph);
}

function buttonCreator(textContent) {
  const buttons = document.createElement("button");
  buttons.textContent = textContent;
}

function divCreator(Class, parentContainer) {
  const divs = document.createElement("div");
  divs.setAttribute("class", `${Class}`);
  parentContainer.appendChild(divs);
}

export { paragraphCreator, buttonCreator, divCreator };
