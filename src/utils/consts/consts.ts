import { IOption } from "../../components/OptionBar";

export const sortTypes = ["популярности", "цене", "алфавиту"];

export const filterTypes = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const optionBarPizzaDoughOptions: IOption[] = [
  {
    name: "Традиционное",
    value: "традиционное",
  },
  { name: "Тонкое", value: "тонкое" },
];

export const optionBarPizzaSizeOptions: IOption[] = [
  { name: "Маленькая", value: 25 },
  { name: "Средняя", value: 30 },
  { name: "Большая", value: 35 },
];
