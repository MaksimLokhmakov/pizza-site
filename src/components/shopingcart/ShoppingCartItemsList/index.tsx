import ShoppingCartListItem from "../ShoppingCartIListItem";
import "./style.scss";

const ShoppingCartItemsList = () => {
  return (
    <section className="shoppingcart-items-list">
      {[1, 2, 3].map((item) => {
        return <ShoppingCartListItem />;
      })}
    </section>
  );
};

export default ShoppingCartItemsList;
