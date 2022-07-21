import { FC } from "react";
import { Title } from "../../common";
import ShoppimgCartItemsList from "../ShoppingCartItemsList";
import "./style.scss";

const SideBarModal: FC = () => {
  return (
    <div className="shopping-cart">
      <div style={{ overflow: "scroll", height: "100%" }}>
        <main className="content">
          <Title className="cart-title">4 товара на 100,60 руб.</Title>
          <ShoppimgCartItemsList />
        </main>
      </div>
    </div>
  );
};

export default SideBarModal;
