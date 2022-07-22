import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Title } from "../../common";
import ProductCard from "../ProductCard";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext, IPizza } from "../../../interfaces";
import { Routes } from "../../../interfaces/IRoute";
import "./style.scss";

const ProductsList = observer(() => {
  const { pizzaStore } = useContext(StoresContext) as IStoresContext;
  const { pizzas } = pizzaStore;
  const location = useLocation();

  return (
    <>
      <Title className="section-title-name">Пицца</Title>

      <section className="df">
        {pizzas.map((pizza: IPizza) => {
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
        })}
      </section>
    </>
  );
});

export default ProductsList;
