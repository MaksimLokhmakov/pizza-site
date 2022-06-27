import { FC, memo } from "react";
import Button, { ButtonTheme } from "../Buttons/Button";
import IPizza from "../../interfaces/IPizza";
import pizzaImg from "../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";
import "./style.scss";
import IngredientsList from "../IngredientsList";

interface ProductCardProps {
  product: IPizza;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, ingredients, price } = product;
  const fixedPrice = price.toFixed(2);

  return (
    <>
      <article className="product">
        <main className="df dc">
          <img src={pizzaImg} alt="pizza" className="img-m" />

          <div className="product-name">{name}</div>

          <p>
            <IngredientsList ingredients={ingredients} />
          </p>
        </main>

        <footer className="df sp-b">
          <div className="product-control-price">от {fixedPrice} руб.</div>

          <Button theme={ButtonTheme.COLLORING_LIGHT}>Выбрать</Button>
        </footer>
      </article>
    </>
  );
};

export default memo(ProductCard);
