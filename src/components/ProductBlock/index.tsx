import React from "react";
import Button, { ButtonTheme } from "../Buttons/Button";
import pizzaImg from "../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";
import "./style.scss";

const ProductBlock = () => {
  return (
    <article className="product">
      <main className="df dc">
        <img src={pizzaImg} alt="pizza" />
        <div className="product-name">Четыре сезона</div>
        <p>
          Итальянские травы, томатный соус, томаты, пикантная пепперони, кубики
          брынзы, моцарелла, ветчина, шампиньоны
        </p>
      </main>
      <footer className="df sp-b">
        <div className="product-control-price">от 17,90 руб.</div>
        <Button onClick={() => {}} theme={ButtonTheme.COLLORING_LIGHT}>
          Выбрать
        </Button>
      </footer>
    </article>
  );
};

export default ProductBlock;
