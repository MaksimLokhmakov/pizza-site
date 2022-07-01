import { IOption } from "../../components/OptionBar";

export const sortTypes = ["Популярности", "цене", "алфавиту"];

export enum SortType {
  POPULARITY = "Популярность",
  PRICE = "Цена",
  ALPHABET = "Алфавит",
}

export enum FiltrationType {
  ALL = "Все",
  MEAT = "Мясная",
  VEGETARIAN = "Вегетерианская",
  GRILL = "Гриль",
  SPICY = "Острая",
  CLOSED = "Закрытая",
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

export const optionBarPizzaDoughOptions: IOption[] = [
  {
    name: "Традиционное",
    value: 0,
  },
  { name: "Тонкое", value: 1, disabled: true },
];

export const optionBarPizzaSizeOptions: IOption[] = [
  { name: "Маленькая", value: 0 },
  { name: "Средняя", value: 1 },
  { name: "Большая", value: 2 },
];
