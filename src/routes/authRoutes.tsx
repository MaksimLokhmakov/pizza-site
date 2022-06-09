import { RouteI } from "../interfaces";
import { Admin, Busket, Favorites } from "../pages";
import { routes } from "../utils/consts/routes";

export const authRoutes: RouteI[] = [
  {
    path: routes.ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: routes.BASKET_ROUTE,
    element: <Busket />,
  },
  {
    path: routes.FAVORITES_ROUTE,
    element: <Favorites />,
  },
];
