import IRoute, { Routes } from "../interfaces/IRoute";
import { Admin, Busket, Favorites } from "../pages";

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
