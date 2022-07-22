import IPizza from "./IPizza";

export default interface IPizzaStore {
  pizzas: IPizza[];

  getPizzaByID: (currentId: string | undefined) => IPizza;
}
