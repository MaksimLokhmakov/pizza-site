import { makeAutoObservable } from "mobx";
import IPizza from "../interfaces/IPizza";

interface IShoppingCartStore {
  pizzas: IPizza[];

  getPizzaPrice: (pizza: IPizza) => number;
  getPizzasCount: () => number;
  getPizzasPrice: () => number;
}

export default class ShoppingCartStore implements IShoppingCartStore {
  _pizzas: IPizza[];
  private _localStoreKey: string;

  constructor() {
    this._pizzas = this.getLocalStoreData();
    this._localStoreKey = "shoppingCartData";
    makeAutoObservable(this);
  }

  get pizzas() {
    return this._pizzas;
  }

  set pizzas(pizzas: IPizza[]) {
    this._pizzas = pizzas;
    this.setLocalStoreData(pizzas);
  }

  getPizzaPrice(pizza: IPizza) {
    const pizzaVariantPrice = pizza.variants[0].price;
    const addonsPrice = pizza.addons.reduce((price, addon) => {
      return price + addon.price;
    }, 0);

    const fixedPrice = Number((pizzaVariantPrice + addonsPrice).toFixed(2));

    return fixedPrice;
  }

  getPizzasPrice() {
    const price = this._pizzas.reduce((price, pizza) => {
      return price + this.getPizzaPrice(pizza);
    }, 0);

    const fixedPrice = Number(price.toFixed(2));

    return fixedPrice;
  }

  getPizzasCount() {
    return this._pizzas.length;
  }

  private getLocalStoreData() {
    const stringValue = localStorage.getItem(this._localStoreKey);

    if (stringValue) {
      return JSON.parse(stringValue);
    }

    return [];
  }

  private setLocalStoreData(currentData: IPizza[]) {
    const currentStringData = JSON.stringify(currentData);

    localStorage.setItem(currentStringData, this._localStoreKey);
  }
}
