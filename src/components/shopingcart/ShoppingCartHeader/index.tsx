import { useContext } from "react";
import { IStoresContext } from "../../../interfaces";
import { observer } from "mobx-react-lite";
import { Title } from "../../common";
import { StoresContext } from "../../StoresProvider";
import "./style.scss";

const ShoppingCartHeader = observer(() => {
  const { shoppingCartStore } = useContext(StoresContext) as IStoresContext;
  const productsCount = shoppingCartStore.getProductsCount();
  const productsTotalPrice = shoppingCartStore.getProductsPrice().toFixed(2);

  return (
    <Title className="cart-title">
      {productsCount} товара на {productsTotalPrice} руб.
    </Title>
  );
});

export default ShoppingCartHeader;
