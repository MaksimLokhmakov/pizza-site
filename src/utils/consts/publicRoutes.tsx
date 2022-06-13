import IRoute, { Routes } from "../../interfaces/IRoute";
import { Auth, Product, Shop } from "../../pages";

export const publicRoutes: IRoute[] = [
  {
    path: Routes.LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: Routes.REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: Routes.SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: Routes.PRODUCT_ROUTE,
    element: <Product />,
  },
];
