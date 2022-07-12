import ShippingCartListItem from "../ShoppingCartIListItem";
import "./style.scss";

const ShoppimgCartItemsList = () => {
  return (
    <section className="shoppingcart-items-list">
      {[1, 2, 3].map((item) => {
        return <ShippingCartListItem />;
      })}
    </section>
  );
};

export default ShoppimgCartItemsList;
