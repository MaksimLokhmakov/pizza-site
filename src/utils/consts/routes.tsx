import IRoute, { Routes } from "../../interfaces/IRoute";
import { Admin, Busket, Favorites, Auth, Product, Shop } from "../../pages";

export const authRoutes: IRoute[] = [
  {
    path: Routes.ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: Routes.BASKET_ROUTE,
    element: <Busket />,
  },
  {
    path: Routes.FAVORITES_ROUTE,
    element: <Favorites />,
  },
];

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
  // {
  //   path: Routes.PRODUCT_ROUTE,
  //   element: <Product />,
  // },
];
