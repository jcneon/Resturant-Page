import "../css/menu.css";
import { headerCreator } from "../components/header";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "../imageURL";
import { createImage } from "../imageURL";

const bodyClass = document.createElement("div");
bodyClass.setAttribute("class", "menu-body");

function menuContainer() {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  document.body.appendChild(container);
  const headerVariable = headerCreator();
  container.appendChild(headerVariable);
  headerVariable.insertAdjacentElement("afterend", bodyClass);

  let menuContent = [
    {
      imgSrc: img1,
      altText: "Breakfast Casserole",
      foodName: "Breakfast Casserole",
      ingredients: "Sausage, Scallion, Eggs, Milk, Spinach, Cheddar, Parmesan, Wheat.",
      price: "$13",
    },
    {
      imgSrc: img2,
      altText: "Broiled Salmon",
      foodName: "Broiled Salmon",
      ingredients: "Salmon Fillets, Garlic, Rosemary, Thyme, Olive Oil, Mustard, Lemon.",
      price: "$19",
    },
    {
      imgSrc: img3,
      altText: "Bacon Egg Cup",
      foodName: "Bacon Egg Cup",
      ingredients: "Bacon, Potatoes, Pepper, Eggs, Fresh Chives Hot Sauce.",
      price: "$8",
    },
    {
      imgSrc: img4,
      altText: "Oven Baked Salmon",
      foodName: "Oven Baked Salmon",
      ingredients: "Salmon Fillet, Coarsed-grain Salt, Black Pepper, Parsley Salsa.",
      price: "$9",
    },
    {
      imgSrc: img5,
      altText: "Parmesan Chicken",
      foodName: "Parmesan Chicken",
      ingredients: "Chicken Breasts, Panko, Parmesan, Olive Oil, Dried Oregano, Black Pepper.",
      price: "$11",
    },
    {
      imgSrc: img6,
      altText: "Chicken Saltimbocca",
      foodName: "Chicken Saltimbocca",
      ingredients: "Chicken Cutlets and Broth, Black Pepper, Prosclutto, Spinach, Parmesan.",
      price: "$10",
    },
    {
      imgSrc: img7,
      altText: "Lemon-garlic Shrimps",
      foodName: "Lemon-garlic Shrimps",
      ingredients: "Shrimps, Grits, Black Pepper, Parmesan Cheese, Butter, Garlic, Lemon, Parsley.",
      price: "$10",
    },
    {
      imgSrc: img8,
      altText: "Frozen Fruit Smoothie",
      foodName: "Frozen Fruit Smoothie",
      ingredients: "Banana, Strawberries, Milk, Vanilla yogurt, Orange juice, Honey or taste.",
      price: "$12",
    },
  ];

  menuContent.forEach((item) => {
    const divs = document.createElement("div");
    divs.setAttribute("class", "menu-picks");
    bodyClass.appendChild(divs);
    const foodImages = createImage(`${item.imgSrc}`, `${item.altText}`, 190, 180);
    divs.appendChild(foodImages);
    const divChild = document.createElement("div");
    divChild.classList.add("paragraphs");
    const foodN = document.createElement("p");
    foodN.setAttribute("id", "food-name");
    divChild.appendChild(foodN);
    foodN.textContent = `${item.foodName}`;
    const foodI = document.createElement("p");
    foodI.setAttribute("id", "ingredients");
    foodN.insertAdjacentElement("afterend", foodI);
    foodI.textContent = `${item.ingredients}`;
    const price = document.createElement("p");
    price.setAttribute("id", "food-price");
    foodI.insertAdjacentElement("afterend", price);
    price.textContent = `${item.price}`;
    foodImages.insertAdjacentElement("afterend", divChild);
  });
  return container;
}

export { menuContainer };
