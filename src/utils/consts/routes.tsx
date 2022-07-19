import ProductInfo from "../../components/products/ProductInfo";
import ShoppingCart from "../../components/ShoppingCart";
import PopupDepsRoute from "../../components/modals/PopupDepsRoute";
import IRoute, { Routes } from "../../interfaces/IRoute";
import { Admin, Favorites, Auth, Shop } from "../../pages";
import classes from "../../styles/popup.module.scss";

export const authRoutes: IRoute[] = [
  {
    path: Routes.ADMIN_ROUTE,
    element: <Admin />,
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
];

export const modalRoutes: IRoute[] = [
  {
    path: Routes.PRODUCT_ROUTE,
    element: (
      <PopupDepsRoute className={classes.popup}>
        <ProductInfo />
      </PopupDepsRoute>
    ),
  },
  {
    path: Routes.SHOPPINGCART_ROUTE,
    element: (
      <PopupDepsRoute className={classes.sidebar}>
        <ShoppingCart />
      </PopupDepsRoute>
    ),
  },
];
