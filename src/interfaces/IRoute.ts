import { ReactNode } from "react";

export enum Routes {
  BASKET_ROUTE = "/busket",
  ADMIN_ROUTE = "/admin",
  SHOP_ROUTE = "/",
  LOGIN_ROUTE = "/login",
  REGISTRATION_ROUTE = "/registration",
  FAVORITES_ROUTE = "/favorites",
  PRODUCT_ROUTE = "/product/:id",
}

export default interface IRoute {
  path: Routes;
  element: ReactNode;
}
