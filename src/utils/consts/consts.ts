import { IOption } from "../../components/OptionBar";
import { PizzaSize, PizzaDough } from "../../interfaces/IPizza";

export const sortTypes = ["Популярности", "цене", "алфавиту"];

export enum SortType {
  DEFAULT = "Отсутствует",
  POPULARITY = "Популярность",
  PRICE = "Цена",
  ALPHABET = "Алфавит",
}

export enum FiltrationType {
  ALL = "Все",
  MEAT = "Мясные",
  VEGETARIAN = "Вегетерианские",
  GRILL = "Гриль",
  SPICY = "Острые",
  CLOSED = "Закрытые",
}

export const optionBarPizzaDoughOptions: IOption[] = [
  {
    name: "Традиционное",
    value: PizzaDough.TRADITIONAL,
  },
  { name: "Тонкое", value: PizzaDough.THIN, disabled: true },
];

export const optionBarPizzaSizeOptions: IOption[] = [
  { name: "Маленькая", value: PizzaSize.SMALL },
  { name: "Средняя", value: PizzaSize.MEDIUM },
  { name: "Большая", value: PizzaSize.BIG },
];
