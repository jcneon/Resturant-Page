import img1 from "./assets/images/food-1.jpeg";
import img2 from "./assets/images/food-2.jpg";
import img3 from "./assets/images/food-3.jpg";
import img4 from "./assets/images/food-4.jpg";
import img5 from "./assets/images/food-5.jpg";
import img6 from "./assets/images/food-6.jpg";
import img7 from "./assets/images/food-7.jpg";
import img8 from "./assets/images/food-8.jpg";
import img9 from "./assets/images/location.png";

export const createImage = (imgSrc, imgAlt, height, width) => {
  const image = document.createElement("img");
  image.src = imgSrc;
  image.alt = imgAlt;
  image.height = height;
  image.width = width;
  return image;
};
export { img1, img2, img3, img4, img5, img6, img7, img8, img9 };
