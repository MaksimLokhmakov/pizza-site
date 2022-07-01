import IPizzaIngredient from "./IPizzaIngredient";
import IPizzaAddon from "./IPizzaAddon";
import IPizzaVariant from "./IPizzaVariant";

export type PizzaType =
  | "Мясная"
  | "Вегетарианская"
  | "Гриль"
  | "Острая"
  | "Закрытая";

export default interface IPizza {
  id: string;
  type: PizzaType;
  name: string;
  variants: IPizzaVariant[];
  ingredients: IPizzaIngredient[];
  addons: IPizzaAddon[];
}
