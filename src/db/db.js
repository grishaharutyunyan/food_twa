import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    { title: "Պիցցա", price:1000, Image: pizzaImg,id:1 },
    { title: "Բուրգեր", price: 1200, Image: burgerImg,id:2 },
    { title: "Կոկա", price: 350, Image: cocaImg ,id:3},
    { title: "Քյաբաբ", price: 900, Image: kebabImg,id:4 },
    { title: "Սալաթ", price: 1100, Image: saladImg,id:5 },
    { title: "Ջուր", price: 500, Image: waterImg,id:6 },
    { title: "Պաղպաղակ", price: 250, Image: iceCreamImg,id:7 },
  ];
}
