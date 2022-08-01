import IPizzaStore from "./IPizzaStore";
import ISelectionStore from "./ISelectionStore";
import IShoppingCartStore from "./IShoppingCartStore";

export default interface IStoresContext {
  pizzaStore: IPizzaStore;
  selectionStore: ISelectionStore;
  shoppingCartStore: IShoppingCartStore;
}
