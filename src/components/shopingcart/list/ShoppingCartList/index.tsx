import { useContext } from "react";
import { IStoresContext } from "../../../../interfaces";
import { StoresContext } from "../../../StoresProvider";
import { observer } from "mobx-react-lite";
import ListItem from "../ShoppingCartListItem";
import "./style.scss";

const ShoppingCartList = observer(() => {
  const { shoppingCartStore } = useContext(StoresContext) as IStoresContext;
  const { pizzas, getPizzaPrice } = shoppingCartStore;

  return (
    <section className="shoppingcart-items-list">
      {pizzas.map((pizza) => {
        const totalPrice = getPizzaPrice(pizza);

        return <ListItem pizza={pizza} price={totalPrice} />;
      })}
    </section>
  );
});

export default ShoppingCartList;
