// export enum PizzaType {
//   MEAT = "мясная",
//   VEGETARIAN = "вегетарианская",
//   GRILL = "гриль",
//   ACUTE = "острая",
//   CLOSED = "закрытая",
// }

// export enum PizzaDough {
//   THIN = "тонкое",
//   TRADITIONAL = "традиционное",
// }

export enum PizzaSize {
  SMALL = 25,
  MEDIUM = 30,
  BIG = 35,
}

export default interface IPizza {
  id: string;
  type: string;
  name: string;
  dough: string;
  minWeight: number;
  size: PizzaSize;
  price: number;
}
