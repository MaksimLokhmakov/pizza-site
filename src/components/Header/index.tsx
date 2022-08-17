import { FC } from "react";
import SearchWithAutoComplite from "../search/SearchWithAutoComplite";
import { Routes } from "../../interfaces/IRoute";
import { useNavigate } from "react-router-dom";
import { Title, Image, Separator } from "../common";
import HeaderShoppingCartButton from "./HeaderShoppingCartButton";
import logo from "../../assets/images/logo.svg";
import "./style.scss";

const Header: FC = () => {
  const navigate = useNavigate();

  const navigateToShopPage = () => {
    navigate(Routes.SHOP_ROUTE);
  };

  return (
    <>
      <header className="header">
        <div className="df">
          <Image
            src={logo}
            alt="logo"
            className="header-logo-img"
            onClick={navigateToShopPage}
          />
          <div>
            <Title className="header-title">REACT PIZZA</Title>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>

        <SearchWithAutoComplite />

        <HeaderShoppingCartButton />
      </header>

      {/* <Separator className="header-separator" /> */}
    </>
  );
};

export default Header;
