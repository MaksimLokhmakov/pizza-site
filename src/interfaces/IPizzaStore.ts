import IPizza from "./IPizza";

export default interface IPizzaStore {
  pizzas: IPizza[];

  getPizzas: (page: number, limit: number) => void;
  getFilteredBySearchPizzas: (searchValue: string) => IPizza[] | null;
  getPizzaByID: (currentId: string) => IPizza;
}
