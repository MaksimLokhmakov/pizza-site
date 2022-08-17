import { forwardRef, useContext } from "react";
import { Separator, Button, Chip } from "../../../common";
import FooterInfo from "../FooterInfo";
import { observer } from "mobx-react-lite";
import { StoresContext } from "../../../StoresProvider";
import { IStoresContext } from "../../../../interfaces";
import classes from "../../../../utils/classes";
import "./style.scss";

interface ShoppingCartFooterProps {
  full?: boolean;
  sticky?: boolean;
}

const ShoppingCartFooter = observer(
  forwardRef<HTMLElement, ShoppingCartFooterProps>(
    ({ full = false, sticky = false }, ref) => {
      const { shoppingCartStore } = useContext(StoresContext) as IStoresContext;
      const totalPrice = shoppingCartStore.getProductsPrice().toFixed(2);
      const productsCount = shoppingCartStore.getProductsCount();
      const classNames = classes(["shoppingcart-footer", { sticky }]);

      return (
        <footer ref={ref} className={classNames}>
          {full && (
            <>
              <FooterInfo
                rightText={`${productsCount} товара`}
                leftText={`${totalPrice} руб.`}
              />
              <FooterInfo rightText="Доставка" leftText="Бесплатно" />

              <Separator />
            </>
          )}

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
    }
  )
);

export default ShoppingCartFooter;
