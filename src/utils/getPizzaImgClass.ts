import { PizzaSize } from "./consts/consts";

export const getPizzaImgClass = (size: PizzaSize) => {
  switch (size) {
    case PizzaSize.SMALL:
      return "";
    case PizzaSize.MEDIUM:
      return "pizza-size-medium";
    case PizzaSize.BIG:
      return "pizza-size-greate";
  }
};
