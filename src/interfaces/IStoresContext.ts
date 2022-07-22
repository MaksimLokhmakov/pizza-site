import IPizzaStore from "./IPizzaStore";
import ISelectionStore from "./ISelectionStore";

export default interface IStoresContext {
  pizzaStore: IPizzaStore;
  selectionStore: ISelectionStore;
}
