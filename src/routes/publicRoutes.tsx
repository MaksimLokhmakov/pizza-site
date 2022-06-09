import { RouteI } from "../interfaces";
import { Auth, Product, Shop } from "../pages";
import { routes } from "../utils/consts/routes";

export const publicRoutes: RouteI[] = [
  {
    path: routes.LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: routes.REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: routes.SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: routes.PRODUCT_ROUTE + "/:id",
    element: <Product />,
  },
];
