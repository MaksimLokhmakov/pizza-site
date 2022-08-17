import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Image, Chip, Button } from "../../../../common";
import {
  IStoresContext,
  IShoppingCartProduct,
} from "../../../../../interfaces";
import { StoresContext } from "../../../../StoresProvider";
import minusIcon from "../../../../../assets/icons/remove_FILL0_wght400_GRAD0_opsz48.svg";
import plusIcon from "../../../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";

interface SCLIFooterProps {
  product: IShoppingCartProduct;
}

const SCLIFooter: FC<SCLIFooterProps> = observer(({ product }) => {
  const { shoppingCartStore } = useContext(StoresContext) as IStoresContext;

  const increaseProductCounter = () => {
    shoppingCartStore.increaseCounter(product);
  };

  const decreaseProductCounter = () => {
    shoppingCartStore.decreaseCounter(product);
  };

  const itemPrice = (
    shoppingCartStore.getProductPrice(product) * product.counter
  ).toFixed(2);

  return (
    <footer className="item-footer">
      <span className="footer-price">{itemPrice} руб.</span>

      <Chip className="footer-counter" theme="colloring-gray">
        <Button className="counter-button" onClick={decreaseProductCounter}>
          <Image
            src={minusIcon}
            alt="minusIcon"
            className="counter-button-img"
          />
        </Button>
        <span>{product.counter}</span>
        <Button className="counter-button" onClick={increaseProductCounter}>
          <Image src={plusIcon} alt="plusIcon" className="counter-button-img" />
        </Button>
      </Chip>
    </footer>
  );
});

export default SCLIFooter;
