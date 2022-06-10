import React, { FC } from "react";
import { button_themes } from "../../../../utils/consts/themes";
import Button from "../Button";
import arrowAlt from "../../../../assets/icons/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg";
import ShoppingCartIcon from "../../../../assets/icons/iconfinder_shopping-cart_2561279 1.svg";
import "./style.scss";

const ShoppingCartButton: FC = () => {
  return (
    <Button theme={button_themes.COLLORING_LIGHT}>
      <div className="cart">
        <span>520 руб.</span>
        <div className="cart-separator" />
        <span className="cart-centered">
          <img src={ShoppingCartIcon} alt="ShoppingCartIcon" /> 3
        </span>
        <img className="arrow-icon" src={arrowAlt} alt="arrow" color="white" />
      </div>
    </Button>
  );
};

export default ShoppingCartButton;
