import { makeAutoObservable, runInAction } from "mobx";
import { IPizzaStore } from "../interfaces";
import axios, { AxiosResponse } from "axios";
import IPizza from "../interfaces/IPizza";

export default class PizzaStore implements IPizzaStore {
  _pizzas: IPizza[];

  constructor() {
    this._pizzas = [];
    makeAutoObservable(this);
  }

  get pizzas(): IPizza[] {
    return this._pizzas;
  }

  getPizzas(page: number, limit: number) {
    axios
      .get(
        `https://pizza-site-backend-rest-pet.herokuapp.com/pizza?_page=${page}&_limit=${limit}`
      )
      .then((res: AxiosResponse<IPizza[]>) => {
        runInAction(() => {
          this._pizzas = [...this._pizzas, ...res.data];
        });
      })
      .catch((err) => console.log(err));
  }

  getFilteredBySearchPizzas(searchValue: string) {
    if (!this._pizzas) {
      return [];
    }

    const lcSearchValue = searchValue.toLowerCase();

    const filteredPizzas = this._pizzas.filter((pizza) => {
      const lcName = pizza.name.toLowerCase();
      return lcName.includes(lcSearchValue);
    });

    return filteredPizzas;
  }

  getPizzaByID(currentId: string) {
    const pizza = this._pizzas.find(
      (pizza) => Number(pizza.id) === Number(currentId)
    ) as IPizza;

    return pizza;
  }
}
