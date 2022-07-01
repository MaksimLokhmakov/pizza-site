import { FC, memo } from "react";
import Button, { ButtonTheme } from "../Buttons/Button";
import IngredientsList from "../IngredientsList";
import IPizza from "../../interfaces/IPizza";
import "./style.scss";

interface ProductCardProps {
  product: IPizza;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, ingredients, variants } = product;
  const image = variants[2].image;
  const price = variants[0].price;
  const fixedPrice = price.toFixed(2);

  return (
    <>
      <article className="product">
        <main>
          <img src={image} alt="pizza" className="img-m" />

          <div className="product-name">{name}</div>

          <IngredientsList ingredients={ingredients} />
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
