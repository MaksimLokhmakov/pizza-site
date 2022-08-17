import IRoute, { Routes } from "../../interfaces/IRoute";
import { Admin, Favorites, Auth, Shop } from "../../pages";
import { ProductInfoModal, ShoppingCartModal } from "../../components/modals";

export const authRoutes: IRoute[] = [
  {
    path: Routes.ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: Routes.FAVORITES_ROUTE,
    Component: Favorites,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: Routes.LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: Routes.REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: Routes.SHOP_ROUTE,
    Component: Shop,
  },
];

export const modalRoutes: IRoute[] = [
  {
    path: Routes.PRODUCT_ROUTE,
    Component: ProductInfoModal,
  },
  {
    path: Routes.SHOPPINGCART_ROUTE,
    Component: ShoppingCartModal,
  },
];
