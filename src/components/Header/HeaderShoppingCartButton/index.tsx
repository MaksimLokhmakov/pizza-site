import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext } from "../../../interfaces";
import { Link, useLocation } from "react-router-dom";
import { Routes } from "../../../interfaces/IRoute";
import { Chip, Image, Separator } from "../../common";
import arrow from "../../../assets/icons/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg";
import "./style.scss";

const HeaderShoppingCartButton = observer(() => {
  const { shoppingCartStore } = useContext(StoresContext) as IStoresContext;
  const location = useLocation();

  const shoppingCartProductsCount = shoppingCartStore.getPizzasCount();

  return (
    <Link
      to={Routes.SHOPPINGCART_ROUTE}
      state={{ backgroundLocation: location }}
    >
      <Chip className="header-button" theme="colloring-light-deep">
        Корзина
        {shoppingCartProductsCount ? (
          <>
            <Separator vertical className="header-button-separator" />
            <span className="header-button-counter">
              {shoppingCartProductsCount}
            </span>
            <Image src={arrow} alt={arrow} className="header-button-img" />
          </>
        ) : null}
      </Chip>
    </Link>
  );
});

export default HeaderShoppingCartButton;
