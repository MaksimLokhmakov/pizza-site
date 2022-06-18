import { IOption } from "../../components/OptionBar";
import { PizzaSize, PizzaDough } from "../../interfaces/IPizza";

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
    value: PizzaDough.TRADITIONAL,
  },
  { name: "Тонкое", value: PizzaDough.THIN, disabled: true },
];

export const optionBarPizzaSizeOptions: IOption[] = [
  { name: "Маленькая", value: PizzaSize.SMALL },
  { name: "Средняя", value: PizzaSize.MEDIUM },
  { name: "Большая", value: PizzaSize.BIG },
];
