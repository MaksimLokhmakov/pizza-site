import { FC, memo } from "react";
import { Button, Chip, Image, Title } from "../../common";
import IngredientsList from "../ingredients/IngredientsList";
import IPizza from "../../../interfaces/IPizza";
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

          <Title className="product-title">{name}</Title>

          <IngredientsList ingredients={ingredients} />
        </main>

        <footer className="df sp-b">
          <span className="product-control-price">от {fixedPrice} руб.</span>

          <Button>
            <Chip className="product-add-chip" theme="colloring-light">
              Выбрать
            </Chip>
          </Button>
        </footer>
      </article>
    </>
  );
};

export default memo(ProductCard);
