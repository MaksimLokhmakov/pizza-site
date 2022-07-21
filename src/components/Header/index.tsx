import { FC } from "react";
import SearchWithAutoComplite from "../search/SearchWithAutoComplite";
import { Routes } from "../../interfaces/IRoute";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Title, Image, Separator, Chip } from "../common";
import arrow from "../../assets/icons/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg";
import logo from "../../assets/images/logo.svg";
import "./style.scss";

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

        <Link
          to={Routes.SHOPPINGCART_ROUTE}
          state={{ backgroundLocation: location }}
        >
          <Chip className="header-button" theme="colloring-light-deep">
            Корзина
            <Separator vertical className="header-button-separator" />
            <span className="header-button-counter">{5}</span>
            <Image src={arrow} alt={arrow} className="header-button-img" />
          </Chip>
        </Link>
      </header>

      <Separator className="header-separator" />
    </>
  );
};

export default Header;
