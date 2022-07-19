import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../ProductCard";
import Title from "../../common/Titile";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import { Routes } from "../../../interfaces/IRoute";
import IPizza from "../../../interfaces/IPizza";
import "./style.scss";

const ProductsList = observer(() => {
  const { pizzaStore } = useContext(Context);
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
