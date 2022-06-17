import React, { FC } from "react";
import { SortMenu, Product } from "../../components";
import "./style.scss";

import pizzaImg from "../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";

interface ShopI {}

const pizzas = [
  {
    id: "0bc9a360-77b7-4675-a03e-506e3e3445a8",
    type: "Мясная",
    img: pizzaImg,
    name: "Маргарита",
    dough: "тонкое",
    price: 17.5,
  },
  {
    id: "0bc9a360-77b7-4675-a03e-506e3e3445a8",
    type: "Мясная",
    img: pizzaImg,
    name: "Маргарита",
    dough: "тонкое",
    price: 17.5,
  },
  {
    id: "0bc9a360-77b7-4675-a03e-506e3e3445a8",
    type: "Мясная",
    img: pizzaImg,
    name: "Маргарита",
    dough: "тонкое",
    price: 17.5,
  },
  {
    id: "0bc9a360-77b7-4675-a03e-506e3e3445a8",
    type: "Мясная",
    img: pizzaImg,
    name: "Маргарита",
    dough: "тонкое",
    price: 17.5,
  },
  {
    id: "0bc9a360-77b7-4675-a03e-506e3e3445a8",
    type: "Мясная",
    img: pizzaImg,
    name: "Маргарита",
    dough: "тонкое",
    price: 17.5,
  },
];

console.log(typeof pizzaImg);

const Shop: FC<ShopI> = () => {
  return (
    <>
      <SortMenu />
      <main className="shop">
        <h1 className="shop__section-name">Пицца</h1>
        <section className="df">
          {pizzas.map((pizza, index) => (
            <Product key={index} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Shop;
