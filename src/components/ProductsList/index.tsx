import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../ProductCard";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import IPizza from "../../interfaces/IPizza";
import "./style.scss";

const ProductsList = observer(() => {
  const { pizzaStore } = useContext(Context);
  const { pizzas } = pizzaStore;
  const location = useLocation();

  return (
    <>
      <h1 className="section-name">Пицца</h1>

      <section className="df">
        {pizzas.map((pizza: IPizza) => (
          <Link
            key={pizza.id}
            to={`/product/${pizza.id}`}
            state={{ backgroundLocation: location }}
          >
            <ProductCard product={pizza} />
          </Link>
        ))}
      </section>
    </>
  );
});

export default ProductsList;
