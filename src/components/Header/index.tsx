import { FC, useCallback } from "react";
import { useNavigation } from "../../hooks";
import ShoppingCartButton from "../Buttons/ShoppingCartButton";
import HeaderSearchInput from "./HeaderSearchInput";
import { Routes } from "../../interfaces/IRoute";
import logo from "../../assets/images/logo.svg";
import "./style.scss";

const Header: FC = () => {
  const { navigateTo, currentRoute } = useNavigation();
  const isBasketRoute = currentRoute === Routes.BASKET_ROUTE;

  const navigateToShoppingCart = useCallback(() => {
    navigateTo(Routes.BASKET_ROUTE);
  }, []);

  const navigateToShopPage = () => {
    navigateTo(Routes.SHOP_ROUTE);
  };

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="logo" onClick={navigateToShopPage} />
        <div>
          <h1>REACT PIZZA</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>

      <HeaderSearchInput />

      {!isBasketRoute && (
        <div>
          <ShoppingCartButton onClick={navigateToShoppingCart} />
        </div>
      )}
      <div className="header__ceparator" />
    </header>
  );
};

export default Header;
