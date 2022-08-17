import IShoppingCartProduct from "./IShoppingCartProduct";
import IPizza from "./IPizza";

export default interface IShoppingCartStore {
  products: IShoppingCartProduct[];

  addProduct: (pizza: IPizza) => void;
  removeProduct: (product: IShoppingCartProduct) => void;

  increaseCounter: (product: IShoppingCartProduct) => void;
  decreaseCounter: (product: IShoppingCartProduct) => void;

  getProductPrice: (product: IShoppingCartProduct) => number;
  getProductsCount: () => number;
  getProductsPrice: () => number;
}
