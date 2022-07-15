import { FC, memo } from "react";
import Button, { ButtonTheme } from "../Buttons/ButtonPrev";
import Image from "../common/Image";
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
          <Image src={image} alt="pizza" className="img-m" />

          <div className="product-name">{name}</div>

          <IngredientsList ingredients={ingredients} />
        </main>

        <footer className="df sp-b">
          <div className="product-control-price">от {fixedPrice} руб.</div>

          <div>
            <Button theme={ButtonTheme.COLLORING_LIGHT}>Выбрать</Button>
          </div>
        </footer>
      </article>
    </>
  );
};

export default memo(ProductCard);
