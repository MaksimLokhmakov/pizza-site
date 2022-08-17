import { useContext } from "react";
import { IStoresContext } from "../../../../interfaces";
import { StoresContext } from "../../../StoresProvider";
import { observer } from "mobx-react-lite";
import ShoppingCartListItem from "../item/ShoppingCartListItem";
import "./style.scss";

const ShoppingCartList = observer(() => {
  const { shoppingCartStore } = useContext(StoresContext) as IStoresContext;
  const { products } = shoppingCartStore;

  return (
    <section className="shoppingcart-items-list">
      {products.map((product) => {
        return <ShoppingCartListItem product={product} />;
      })}
    </section>
  );
});

export default ShoppingCartList;
