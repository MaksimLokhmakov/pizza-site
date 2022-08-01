import { FC } from "react";
import { Title } from "../../common";
import ExtraInfoCart from "../../ExtraInfoCart";
import Slider from "../../Slider";
import ShoppingCartHeader from "../ShoppingCartHeader";
import { observer } from "mobx-react-lite";
import ShoppingCartItemsList from "../list/ShoppingCartList";
import ShoppingCartFooter from "../footer/ShoppingCartFooter";
import "./style.scss";

// ? temp
import image from "../../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";

const SideBarModal: FC = () => {
  return (
    <div className="shopping-cart">
      <div
        style={{
          overflow: "scroll",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <main className="content">
          <ShoppingCartHeader />

          <ShoppingCartItemsList />

          <Title className="slider-title">Добавить к заказу?</Title>
          <Slider>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return (
                <ExtraInfoCart
                  image={image}
                  className="slider-element"
                  title="Слоеные палочки с брусникой"
                  secondaryText="8,90 руб."
                />
              );
            })}
          </Slider>
        </main>

        <ShoppingCartFooter />
      </div>
    </div>
  );
};

export default SideBarModal;
