/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/contact.css":
/*!*****************************!*\
  !*** ./src/css/contact.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://resturant-page/./src/css/contact.css?");

/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://resturant-page/./src/css/home.css?");

/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://resturant-page/./src/css/menu.css?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerCreator: () => (/* binding */ headerCreator)\n/* harmony export */ });\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/contact */ \"./src/pages/contact.js\");\n\r\n\r\n\r\n\r\nfunction headerParagraph(parentContainer) {\r\n  const headerParagraph = document.createElement(\"p\");\r\n  headerParagraph.setAttribute(\"id\", \"header-text\");\r\n  headerParagraph.textContent = `Just Delicious`;\r\n  parentContainer.appendChild(headerParagraph);\r\n}\r\n\r\nlet link = [\r\n  { url: \"../pages/home.js\", text: \"HOME\", id: \"home\" },\r\n  { url: \"../pages/menu.js\", text: \"MENU\", id: \"menu\" },\r\n  { url: \"../pages/contact.js\", text: \"CONTACT\", id: \"contact\" },\r\n];\r\n\r\nfunction headerLinks(parentContainer) {\r\n  const ul = document.createElement(\"ul\");\r\n  link.forEach((link) => {\r\n    let listItem = document.createElement(\"li\");\r\n    let anchor = document.createElement(\"a\");\r\n    anchor.href = link.url;\r\n    anchor.textContent = link.text;\r\n    anchor.id = link.id;\r\n    anchor.page = link.page;\r\n    if (anchor.textContent === \"HOME\") {\r\n      anchor.addEventListener(\"click\", function (event) {\r\n        event.preventDefault();\r\n        const removeContainer = document.querySelector(\".container\");\r\n        document.body.removeChild(removeContainer);\r\n        const newHomeContainerElement = (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__.container)();\r\n        document.body.appendChild(newHomeContainerElement);\r\n\r\n        console.log(document.querySelectorAll(\".buttons\"));\r\n        const checkButton = document.querySelectorAll(\".buttons\");\r\n        if (checkButton.length !== 1) {\r\n          checkButton[0].remove();\r\n        }\r\n      });\r\n    }\r\n    if (anchor.textContent === \"MENU\") {\r\n      anchor.addEventListener(\"click\", function (event) {\r\n        event.preventDefault();\r\n        const removeContainer = document.querySelector(\".container\");\r\n        document.body.removeChild(removeContainer);\r\n        const newMenuContainerElement = (0,_pages_menu__WEBPACK_IMPORTED_MODULE_0__.menuContainer)();\r\n        document.body.appendChild(newMenuContainerElement);\r\n        const checkMenu = document.querySelectorAll(\".menu-picks\");\r\n        if (checkMenu.length !== 8) {\r\n          for (let i = 8; i < checkMenu.length; i++) {\r\n            checkMenu[i].remove();\r\n          }\r\n        }\r\n      });\r\n    }\r\n    if (anchor.textContent === \"CONTACT\") {\r\n      anchor.addEventListener(\"click\", function (event) {\r\n        event.preventDefault();\r\n        const removeContainer = document.querySelector(\".container\");\r\n        document.body.removeChild(removeContainer);\r\n        const newContactContainerElement = (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__.contactContainer)();\r\n        document.body.appendChild(newContactContainerElement);\r\n        const checkAddress = document.querySelectorAll(\".address\");\r\n        if (checkAddress.length !== 1) {\r\n          for (let i = 1; i < checkAddress.length; i++) {\r\n            checkAddress[i].remove();\r\n          }\r\n        }\r\n        const checkForm = document.querySelectorAll(\".user-details-form\");\r\n        if (checkForm.length !== 1) {\r\n          for (let i = 1; i < checkForm.length; i++) {\r\n            checkForm[i].remove();\r\n          }\r\n        }\r\n      });\r\n    }\r\n    listItem.appendChild(anchor);\r\n    ul.appendChild(listItem);\r\n  });\r\n\r\n  parentContainer.appendChild(ul);\r\n}\r\n\r\nfunction headerCreator() {\r\n  const header = document.createElement(\"div\");\r\n  header.setAttribute(\"class\", \"header\");\r\n  headerParagraph(header);\r\n  headerLinks(header);\r\n  return header;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/imageURL.js":
/*!*************************!*\
  !*** ./src/imageURL.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createImage: () => (/* binding */ createImage),\n/* harmony export */   img1: () => (/* reexport default export from named module */ _assets_images_food_1_jpeg__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   img2: () => (/* reexport default export from named module */ _assets_images_food_2_jpg__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   img3: () => (/* reexport default export from named module */ _assets_images_food_3_jpg__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   img4: () => (/* reexport default export from named module */ _assets_images_food_4_jpg__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   img5: () => (/* reexport default export from named module */ _assets_images_food_5_jpg__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   img6: () => (/* reexport default export from named module */ _assets_images_food_6_jpg__WEBPACK_IMPORTED_MODULE_5__),\n/* harmony export */   img7: () => (/* reexport default export from named module */ _assets_images_food_7_jpg__WEBPACK_IMPORTED_MODULE_6__),\n/* harmony export */   img8: () => (/* reexport default export from named module */ _assets_images_food_8_jpg__WEBPACK_IMPORTED_MODULE_7__),\n/* harmony export */   img9: () => (/* reexport default export from named module */ _assets_images_location_png__WEBPACK_IMPORTED_MODULE_8__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_food_1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/food-1.jpeg */ \"./src/assets/images/food-1.jpeg\");\n/* harmony import */ var _assets_images_food_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/food-2.jpg */ \"./src/assets/images/food-2.jpg\");\n/* harmony import */ var _assets_images_food_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/food-3.jpg */ \"./src/assets/images/food-3.jpg\");\n/* harmony import */ var _assets_images_food_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/food-4.jpg */ \"./src/assets/images/food-4.jpg\");\n/* harmony import */ var _assets_images_food_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/food-5.jpg */ \"./src/assets/images/food-5.jpg\");\n/* harmony import */ var _assets_images_food_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/food-6.jpg */ \"./src/assets/images/food-6.jpg\");\n/* harmony import */ var _assets_images_food_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/food-7.jpg */ \"./src/assets/images/food-7.jpg\");\n/* harmony import */ var _assets_images_food_8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/food-8.jpg */ \"./src/assets/images/food-8.jpg\");\n/* harmony import */ var _assets_images_location_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/location.png */ \"./src/assets/images/location.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst createImage = (imgSrc, imgAlt, height, width) => {\r\n  const image = document.createElement(\"img\");\r\n  image.src = imgSrc;\r\n  image.alt = imgAlt;\r\n  image.height = height;\r\n  image.width = width;\r\n  return image;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/imageURL.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\r\n\r\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.container)();\r\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactContainer: () => (/* binding */ contactContainer)\n/* harmony export */ });\n/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/contact.css */ \"./src/css/contact.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ \"./src/utility.js\");\n/* harmony import */ var _imageURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imageURL */ \"./src/imageURL.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst bodyClass = document.createElement(\"div\");\r\nbodyClass.setAttribute(\"class\", \"contact-body\");\r\n\r\nfunction contactContainer() {\r\n  const container = document.createElement(\"div\");\r\n  container.setAttribute(\"class\", \"container\");\r\n  document.body.appendChild(container);\r\n  const headerVariable = (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.headerCreator)();\r\n  container.appendChild(headerVariable);\r\n  headerVariable.insertAdjacentElement(\"afterend\", bodyClass);\r\n  const address = document.createElement(\"div\");\r\n  address.setAttribute(\"class\", \"address\");\r\n  bodyClass.appendChild(address);\r\n  (0,_utility__WEBPACK_IMPORTED_MODULE_2__.paragraphCreator)(\"brand-name\", address, \"Just Delicious\");\r\n  const rAddress = document.createElement(\"div\");\r\n  rAddress.setAttribute(\"class\", \"resturant-address\");\r\n  address.appendChild(rAddress);\r\n  (0,_utility__WEBPACK_IMPORTED_MODULE_2__.paragraphCreator)(null, rAddress, \"432 Oak Street Anytown, USA 12345\");\r\n  (0,_utility__WEBPACK_IMPORTED_MODULE_2__.paragraphCreator)(null, rAddress, \"(555) 123-4567, (555) 987-6543\");\r\n\r\n  const userDetailsForm = document.createElement(\"div\");\r\n  userDetailsForm.setAttribute(\"class\", \"user-details-form\");\r\n  bodyClass.appendChild(userDetailsForm);\r\n  // form title and subtitle creation\r\n  const forms = document.createElement(\"form\");\r\n  forms.action = \"get\";\r\n  userDetailsForm.appendChild(forms);\r\n  const formAction = document.createElement(\"div\");\r\n  formAction.setAttribute(\"class\", \"form-actions\");\r\n  forms.appendChild(formAction);\r\n\r\n  const formChild1 = document.createElement(\"div\");\r\n  formChild1.setAttribute(\"class\", \"form-child\");\r\n  const nameLabel1 = document.createElement(\"label\");\r\n  nameLabel1.htmlFor = \"name\";\r\n  nameLabel1.textContent = \"Name: \";\r\n  formChild1.appendChild(nameLabel1);\r\n  const nameInput1 = document.createElement(\"input\");\r\n  nameInput1.type = \"text\";\r\n  nameInput1.id = \"user-name\";\r\n  nameInput1.name = \"user-name\";\r\n  nameLabel1.insertAdjacentElement(\"afterend\", nameInput1);\r\n  formAction.appendChild(formChild1);\r\n\r\n  const formChild2 = document.createElement(\"div\");\r\n  formChild2.setAttribute(\"class\", \"form-child\");\r\n  const emailLabel = document.createElement(\"label\");\r\n  emailLabel.htmlFor = \"email\";\r\n  emailLabel.textContent = \"Email: \";\r\n  formChild2.appendChild(emailLabel);\r\n  const emailInput = document.createElement(\"input\");\r\n  emailInput.type = \"email\";\r\n  emailInput.id = \"user-email\";\r\n  emailInput.name = \"user-email\";\r\n  emailLabel.insertAdjacentElement(\"afterend\", emailInput);\r\n  formAction.appendChild(formChild2);\r\n\r\n  const formChild3 = document.createElement(\"div\");\r\n  formChild3.setAttribute(\"class\", \"form-child\");\r\n  const textArea = document.createElement(\"label\");\r\n  textArea.htmlFor = \"message\";\r\n  textArea.textContent = \"Message:\";\r\n  formChild3.appendChild(textArea);\r\n  const textAreaInput = document.createElement(\"textarea\");\r\n  textAreaInput.id = \"user-message\";\r\n  textAreaInput.name = \"user-message\";\r\n  textAreaInput.cols = 36;\r\n  textAreaInput.rows = 10;\r\n  textArea.insertAdjacentElement(\"afterend\", textAreaInput);\r\n  formAction.appendChild(formChild3);\r\n\r\n  const subBtn = document.createElement(\"button\");\r\n  subBtn.textContent = \"Envoyer\";\r\n  formAction.appendChild(subBtn);\r\n\r\n  const locationImage = (0,_imageURL__WEBPACK_IMPORTED_MODULE_3__.createImage)(`${_imageURL__WEBPACK_IMPORTED_MODULE_3__.img9}`, \"Resturant Location\", 700, 1600);\r\n  locationImage.setAttribute(\"class\", \"location\");\r\n  forms.appendChild(locationImage);\r\n  return container;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bodyClass: () => (/* binding */ bodyClass),\n/* harmony export */   container: () => (/* binding */ container)\n/* harmony export */ });\n/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.css */ \"./src/css/home.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ \"./src/utility.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/pages/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst bodyClass = document.createElement(\"div\");\r\nbodyClass.setAttribute(\"class\", \"home-body\");\r\n\r\n(0,_utility__WEBPACK_IMPORTED_MODULE_2__.paragraphCreator)(\"welcome\", bodyClass, \"Welcome to Just Delicious Resturant\");\r\n(0,_utility__WEBPACK_IMPORTED_MODULE_2__.paragraphCreator)(\"eat-healthy\", bodyClass, \"Eat Healthy and Natural Food\");\r\n(0,_utility__WEBPACK_IMPORTED_MODULE_2__.paragraphCreator)(\r\n  \"about-us\",\r\n  bodyClass,\r\n  `Just Delicious is a resturant, bar and coffee roastery. We have awesome recipes and the most talented chefs in town. We\r\n          promise to offer you the best experience you can ever wish from a resturant. Thank you for visiting our site!`\r\n);\r\n\r\nfunction container() {\r\n  const container = document.createElement(\"div\");\r\n  container.setAttribute(\"class\", \"container\");\r\n  document.body.appendChild(container);\r\n  const headerVariable = (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.headerCreator)();\r\n  container.appendChild(headerVariable);\r\n  headerVariable.insertAdjacentElement(\"afterend\", bodyClass);\r\n\r\n  const divs = document.createElement(\"div\");\r\n  divs.setAttribute(\"class\", \"buttons\");\r\n  bodyClass.appendChild(divs);\r\n\r\n  let buttons = [\r\n    { url: \"./runMenu.js\", text: \"OUR MENU\", id: \"menu-btn\" },\r\n    { url: \"./runContact.js\", text: \"GET IN TOUCH\", id: \"contact-btn\" },\r\n  ];\r\n\r\n  for (const element of buttons) {\r\n    const btn = document.createElement(\"button\");\r\n    divs.appendChild(btn);\r\n    btn.textContent = `${element.text}`;\r\n    btn.id = `${element.id}`;\r\n    btn.onclick = function () {\r\n      if (btn.textContent === \"OUR MENU\") {\r\n        const menuContainerElement = (0,_menu__WEBPACK_IMPORTED_MODULE_3__.menuContainer)();\r\n        document.body.removeChild(container);\r\n        document.body.appendChild(menuContainerElement);\r\n\r\n        const checkMenu = document.querySelectorAll(\".menu-picks\");\r\n        if (checkMenu.length !== 8) {\r\n          for (let i = 8; i < checkMenu.length; i++) {\r\n            checkMenu[i].remove();\r\n          }\r\n        }\r\n      }\r\n      if (btn.textContent === \"GET IN TOUCH\") {\r\n        const contactContainerElement = (0,_contact__WEBPACK_IMPORTED_MODULE_4__.contactContainer)();\r\n        document.body.removeChild(container);\r\n        document.body.appendChild(contactContainerElement);\r\n\r\n        const checkAddress = document.querySelectorAll(\".address\");\r\n        if (checkAddress.length !== 1) {\r\n          for (let i = 1; i < checkAddress.length; i++) {\r\n            checkAddress[i].remove();\r\n          }\r\n        }\r\n        const checkForm = document.querySelectorAll(\".user-details-form\");\r\n        if (checkForm.length !== 1) {\r\n          for (let i = 1; i < checkForm.length; i++) {\r\n            checkForm[i].remove();\r\n          }\r\n        }\r\n      }\r\n    };\r\n  }\r\n  return container;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuContainer: () => (/* binding */ menuContainer)\n/* harmony export */ });\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/menu.css */ \"./src/css/menu.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _imageURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imageURL */ \"./src/imageURL.js\");\n\r\n\r\n\r\n\r\n\r\nconst bodyClass = document.createElement(\"div\");\r\nbodyClass.setAttribute(\"class\", \"menu-body\");\r\n\r\nfunction menuContainer() {\r\n  const container = document.createElement(\"div\");\r\n  container.setAttribute(\"class\", \"container\");\r\n  document.body.appendChild(container);\r\n  const headerVariable = (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.headerCreator)();\r\n  container.appendChild(headerVariable);\r\n  headerVariable.insertAdjacentElement(\"afterend\", bodyClass);\r\n\r\n  let menuContent = [\r\n    {\r\n      imgSrc: _imageURL__WEBPACK_IMPORTED_MODULE_2__.img1,\r\n      altText: \"Breakfast Casserole\",\r\n      foodName: \"Breakfast Casserole\",\r\n      ingredients: \"Sausage, Scallion, Eggs, Milk, Spinach, Cheddar, Parmesan, Wheat.\",\r\n      price: \"$13\",\r\n    },\r\n    {\r\n      imgSrc: _imageURL__WEBPACK_IMPORTED_MODULE_2__.img2,\r\n      altText: \"Broiled Salmon\",\r\n      foodName: \"Broiled Salmon\",\r\n      ingredients: \"Salmon Fillets, Garlic, Rosemary, Thyme, Olive Oil, Mustard, Lemon.\",\r\n      price: \"$19\",\r\n    },\r\n    {\r\n      imgSrc: _imageURL__WEBPACK_IMPORTED_MODULE_2__.img3,\r\n      altText: \"Bacon Egg Cup\",\r\n      foodName: \"Bacon Egg Cup\",\r\n      ingredients: \"Bacon, Potatoes, Pepper, Eggs, Fresh Chives Hot Sauce.\",\r\n      price: \"$8\",\r\n    },\r\n    {\r\n      imgSrc: _imageURL__WEBPACK_IMPORTED_MODULE_2__.img4,\r\n      altText: \"Oven Baked Salmon\",\r\n      foodName: \"Oven Baked Salmon\",\r\n      ingredients: \"Salmon Fillet, Coarsed-grain Salt, Black Pepper, Parsley Salsa.\",\r\n      price: \"$9\",\r\n    },\r\n    {\r\n      imgSrc: _imageURL__WEBPACK_IMPORTED_MODULE_2__.img5,\r\n      altText: \"Parmesan Chicken\",\r\n      foodName: \"Parmesan Chicken\",\r\n      ingredients: \"Chicken Breasts, Panko, Parmesan, Olive Oil, Dried Oregano, Black Pepper.\",\r\n      price: \"$11\",\r\n    },\r\n    {\r\n      imgSrc: _imageURL__WEBPACK_IMPORTED_MODULE_2__.img6,\r\n      altText: \"Chicken Saltimbocca\",\r\n      foodName: \"Chicken Saltimbocca\",\r\n      ingredients: \"Chicken Cutlets and Broth, Black Pepper, Prosclutto, Spinach, Parmesan.\",\r\n      price: \"$10\",\r\n    },\r\n    {\r\n      imgSrc: _imageURL__WEBPACK_IMPORTED_MODULE_2__.img7,\r\n      altText: \"Lemon-garlic Shrimps\",\r\n      foodName: \"Lemon-garlic Shrimps\",\r\n      ingredients: \"Shrimps, Grits, Black Pepper, Parmesan Cheese, Butter, Garlic, Lemon, Parsley.\",\r\n      price: \"$10\",\r\n    },\r\n    {\r\n      imgSrc: _imageURL__WEBPACK_IMPORTED_MODULE_2__.img8,\r\n      altText: \"Frozen Fruit Smoothie\",\r\n      foodName: \"Frozen Fruit Smoothie\",\r\n      ingredients: \"Banana, Strawberries, Milk, Vanilla yogurt, Orange juice, Honey or taste.\",\r\n      price: \"$12\",\r\n    },\r\n  ];\r\n\r\n  menuContent.forEach((item) => {\r\n    const divs = document.createElement(\"div\");\r\n    divs.setAttribute(\"class\", \"menu-picks\");\r\n    bodyClass.appendChild(divs);\r\n    const foodImages = (0,_imageURL__WEBPACK_IMPORTED_MODULE_2__.createImage)(`${item.imgSrc}`, `${item.altText}`, 190, 180);\r\n    divs.appendChild(foodImages);\r\n    const divChild = document.createElement(\"div\");\r\n    divChild.classList.add(\"paragraphs\");\r\n    const foodN = document.createElement(\"p\");\r\n    foodN.setAttribute(\"id\", \"food-name\");\r\n    divChild.appendChild(foodN);\r\n    foodN.textContent = `${item.foodName}`;\r\n    const foodI = document.createElement(\"p\");\r\n    foodI.setAttribute(\"id\", \"ingredients\");\r\n    foodN.insertAdjacentElement(\"afterend\", foodI);\r\n    foodI.textContent = `${item.ingredients}`;\r\n    const price = document.createElement(\"p\");\r\n    price.setAttribute(\"id\", \"food-price\");\r\n    foodI.insertAdjacentElement(\"afterend\", price);\r\n    price.textContent = `${item.price}`;\r\n    foodImages.insertAdjacentElement(\"afterend\", divChild);\r\n  });\r\n  return container;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonCreator: () => (/* binding */ buttonCreator),\n/* harmony export */   divCreator: () => (/* binding */ divCreator),\n/* harmony export */   paragraphCreator: () => (/* binding */ paragraphCreator)\n/* harmony export */ });\nfunction paragraphCreator(id, parentContainer, textContent) {\r\n  const paragraph = document.createElement(\"p\");\r\n  if (id) {\r\n    paragraph.setAttribute(\"id\", id);\r\n  }\r\n  paragraph.textContent = textContent;\r\n  parentContainer.appendChild(paragraph);\r\n}\r\n\r\nfunction buttonCreator(textContent) {\r\n  const buttons = document.createElement(\"button\");\r\n  buttons.textContent = textContent;\r\n}\r\n\r\nfunction divCreator(Class, parentContainer) {\r\n  const divs = document.createElement(\"div\");\r\n  divs.setAttribute(\"class\", `${Class}`);\r\n  parentContainer.appendChild(divs);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/utility.js?");

/***/ }),

/***/ "./src/assets/images/food-1.jpeg":
/*!***************************************!*\
  !*** ./src/assets/images/food-1.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/food-1.jpeg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/food-1.jpeg?");

/***/ }),

/***/ "./src/assets/images/food-2.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/food-2.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/food-2.jpg?");

/***/ }),

/***/ "./src/assets/images/food-3.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/food-3.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/food-3.jpg?");

/***/ }),

/***/ "./src/assets/images/food-4.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-4.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/food-4.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/food-4.jpg?");

/***/ }),

/***/ "./src/assets/images/food-5.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-5.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/food-5.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/food-5.jpg?");

/***/ }),

/***/ "./src/assets/images/food-6.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-6.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/food-6.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/food-6.jpg?");

/***/ }),

/***/ "./src/assets/images/food-7.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-7.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/food-7.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/food-7.jpg?");

/***/ }),

/***/ "./src/assets/images/food-8.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-8.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/food-8.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/food-8.jpg?");

/***/ }),

/***/ "./src/assets/images/location.png":
/*!****************************************!*\
  !*** ./src/assets/images/location.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/images/location.png\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/location.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;