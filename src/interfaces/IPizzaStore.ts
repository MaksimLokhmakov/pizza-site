import IPizza from "./IPizza";

export default interface IPizzaStore {
  pizzas: IPizza[];

  getFilteredBySearchPizzas: (searchValue: string) => IPizza[];
  getPizzaByID: (currentId: string | undefined) => IPizza;
}
