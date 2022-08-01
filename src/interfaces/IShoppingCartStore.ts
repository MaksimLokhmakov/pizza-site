import IPizza from "./IPizza";

export default interface IShoppingCartStore {
  pizzas: IPizza[];

  getPizzaPrice: (pizza: IPizza) => number;
  getPizzasCount: () => number;
  getPizzasPrice: () => number;
}
