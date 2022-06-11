import React, { FC, memo } from "react";
import { ButtonTheme } from "../Button";
import Button from "../Button";
import arrowAlt from "../../../assets/icons/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg";
import ShoppingCartIcon from "../../../assets/icons/iconfinder_shopping-cart_2561279 1.svg";
import "./style.scss";

interface ShoppingCartButtonProps {
  onClick: () => void;
}

const ShoppingCartButton: FC<ShoppingCartButtonProps> = ({ onClick }) => {
  const handleClick = () => onClick();

  console.log("ShoppingCartButtonProps render");

  return (
    <Button theme={ButtonTheme.COLLORING_LIGHT} onClick={handleClick}>
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
