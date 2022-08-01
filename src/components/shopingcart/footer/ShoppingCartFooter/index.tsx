import { useContext } from "react";
import { Separator, Button, Chip } from "../../../common";
import FooterInfo from "../FooterInfo";
import { observer } from "mobx-react-lite";
import { StoresContext } from "../../../StoresProvider";
import { IStoresContext } from "../../../../interfaces";
import "./style.scss";

const ShoppingCartFooter = observer(() => {
  const { shoppingCartStore } = useContext(StoresContext) as IStoresContext;
  const totalPrice = shoppingCartStore.getPizzasPrice().toFixed(2);
  const productsCount = shoppingCartStore.getPizzasCount();

  return (
    <footer className="shoppingcart-footer">
      <FooterInfo
        rightText={`${productsCount} товара`}
        leftText={`${totalPrice} руб.`}
      />
      <FooterInfo rightText="Доставка" leftText="Бесплатно" />

      <Separator />

      <FooterInfo
        rightText="Сумма заказа"
        leftText={`${totalPrice} руб.`}
        textClassName="total-price-info"
      />

      <Button className="shoppingcart-footer-button">
        <Chip
          className="shoppingcart-footer-button-chip"
          theme="colloring-light-deep"
        >
          К оформлению заказа
        </Chip>
      </Button>
    </footer>
  );
});

export default ShoppingCartFooter;
