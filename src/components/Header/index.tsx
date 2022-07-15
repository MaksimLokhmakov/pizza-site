import { FC, useCallback } from "react";
import { useNavigation } from "../../hooks";
import ShoppingCartButton from "../Buttons/ShoppingCartButton";
import HeaderSearchInput from "./HeaderSearchInput";
import { Routes } from "../../interfaces/IRoute";
import logo from "../../assets/images/logo.svg";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const { navigateTo, currentRoute } = useNavigation();
  const location = useLocation();
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
        <Link to={`/shoppingcart`} state={{ backgroundLocation: location }}>
          <ShoppingCartButton onClick={() => {}} />
        </Link>
      )}
      <div className="header__separator" />
    </header>
  );
};

export default Header;
