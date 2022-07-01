export type PizzaDoughType = "тонкое" | "традиционное";

export default interface IPizzaVariant {
  id: string;
  size: number;
  price: number;
  weight: number;
  dough: PizzaDoughType;
  image: string;
}
