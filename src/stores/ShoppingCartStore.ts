import { makeAutoObservable } from "mobx";
import IShoppingCartProduct from "../interfaces/IShoppingCartProduct";
import IShoppingCartStore from "../interfaces/IShoppingCartStore";
import IPizza from "../interfaces/IPizza";
export default class ShoppingCartStore implements IShoppingCartStore {
  _products: IShoppingCartProduct[];
  private _localStoreProductsKey: string;

  constructor() {
    this._localStoreProductsKey = "shopping-cart-products";
    this._products = this.getLocalStoreData();

    makeAutoObservable(this);
  }

  get products() {
    return this._products;
  }

  increaseCounter(product: IShoppingCartProduct) {
    if (product.counter === 12) {
      return;
    }

    product.counter += 1;

    this.setLocalStoreData();
  }

  decreaseCounter(product: IShoppingCartProduct) {
    product.counter -= 1;

    if (product.counter === 0) {
      this.removeProduct(product);
    }

    this.setLocalStoreData();
  }

  isPizzasEqual(fPizza: IPizza, sPizza: IPizza) {
    const fPizzaSortedString = JSON.stringify(fPizza).split("").sort().join("");
    const sPizzaSortedString = JSON.stringify(sPizza).split("").sort().join("");
    const isEqual = fPizzaSortedString === sPizzaSortedString;

    return isEqual;
  }

  addProduct(pizza: IPizza) {
    let isPizzaInShoppingCart = false;

    this._products.forEach((product) => {
      if (this.isPizzasEqual(pizza, product.product)) {
        isPizzaInShoppingCart = true;
        this.increaseCounter(product);
      }
    });

    if (!isPizzaInShoppingCart) {
      this._products.push({ product: pizza, counter: 1 });
    }

    this.setLocalStoreData();
  }

  removeProduct(cProduct: IShoppingCartProduct) {
    this._products = this._products.filter((product) => {
      const isEqual = this.isPizzasEqual(product.product, cProduct.product);

      return !isEqual;
    });

    this.setLocalStoreData();
  }

  getProductPrice(product: IShoppingCartProduct) {
    const pizzaVariantPrice = product.product.variants[0].price;
    const addonsPrice = product.product.addons.reduce((price, addon) => {
      return price + addon.price;
    }, 0);

    const fixedPrice = Number((pizzaVariantPrice + addonsPrice).toFixed(2));

    return fixedPrice;
  }

  getProductsPrice() {
    const price = this._products.reduce((price, product) => {
      return price + this.getProductPrice(product) * product.counter;
    }, 0);

    return Number(price.toFixed(2));
  }

  getProductsCount() {
    const pizzazCount = this._products.reduce((count, { counter }) => {
      return count + counter;
    }, 0);

    return pizzazCount;
  }

  private getLocalStoreData() {
    const stringValue = localStorage.getItem(this._localStoreProductsKey);

    if (stringValue) {
      return JSON.parse(stringValue);
    }

    return [];
  }

  private setLocalStoreData() {
    const currentStringData = JSON.stringify(this._products);

    localStorage.setItem(this._localStoreProductsKey, currentStringData);
  }
}
