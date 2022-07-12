import { FC } from "react";
import ShoppimgCartItemsList from "../ShippingCartItemsList";
import "./style.scss";

const SideBarModal: FC = () => {
  return (
    <div className="shopping-cart">
      <div style={{ overflow: "scroll", height: "100%" }}>
        <main className="content">
          <section className="cart">
            <h1 className="cart-title">4 товара на 100,60 руб.</h1>
          </section>
          <ShoppimgCartItemsList />
        </main>
      </div>
    </div>
  );
};

export default SideBarModal;
