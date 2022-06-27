import pizzaImg from "../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";

export enum PizzaType {
  MEAT = "мясная",
  VEGETARIAN = "вегетарианская",
  GRILL = "гриль",
  ACUTE = "острая",
  CLOSED = "закрытая",
}

export enum PizzaDough {
  THIN = "тонкое",
  TRADITIONAL = "традиционное",
}

export enum PizzaSize {
  SMALL = 25,
  MEDIUM = 30,
  BIG = 35,
}

export interface IIngredient {
  name: string;
  required: boolean;
}

export default interface IPizza {
  id: string;
  type: string;
  ingredients: IIngredient[];
  name: string;
  dough: string;
  minWeight: number;
  size: PizzaSize;
  price: number;
  img: typeof pizzaImg;
}
