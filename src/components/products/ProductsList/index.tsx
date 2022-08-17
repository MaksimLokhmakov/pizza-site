import { useState, useContext, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Title } from "../../common";
import ProductCard from "../ProductCard";
import ProductLoader from "../../loaders/ProductLoader";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext, IPizza } from "../../../interfaces";
import { Routes } from "../../../interfaces/IRoute";
import { useScroll } from "../../../hooks";
import "./style.scss";

const ProductsList = observer(() => {
  const { pizzaStore } = useContext(StoresContext) as IStoresContext;
  const { pizzas } = pizzaStore;
  const location = useLocation();

  const page = useRef(1);
  const limit = 12;

  const intersectingElementRef = useRef<HTMLDivElement | null>(null);
  const intersectingElementParent =
    intersectingElementRef.current &&
    intersectingElementRef.current.offsetParent;

  const getProducts = useCallback(() => {
    pizzaStore.getPizzas(page.current, limit);
    page.current += 1;
  }, []);

  useScroll(
    intersectingElementParent as HTMLElement,
    intersectingElementRef,
    getProducts
  );

  useEffect(() => {
    getProducts();
  }, []);

  const products = pizzas.length
    ? pizzas.map((pizza: IPizza) => {
        const path = Routes.PRODUCT_ROUTE.replace(/:id/, pizza.id);

        return (
          <Link
            key={pizza.id}
            to={path}
            state={{ backgroundLocation: location }}
          >
            <ProductCard product={pizza} />
          </Link>
        );
      })
    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <ProductLoader key={item} />
      ));

  return (
    <>
      <Title className="section-title-name">Пицца</Title>

      <section className="df">
        {products}
        <div ref={intersectingElementRef} />
      </section>
    </>
  );
});

export default ProductsList;
