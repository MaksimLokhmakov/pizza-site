import { FC } from "react";
import { Image, Title, Separator } from "../../common";
import "./style.scss";

interface AutoCompliteProductCartProps {
  image: string;
  name: string;
  price: number;
}

const AutoCompliteProductCart: FC<AutoCompliteProductCartProps> = ({
  image,
  name,
  price,
}) => {
  const fixedPrice = price.toFixed(2);

  return (
    <>
      <div className="autocomplite-product-cart-wrapper">
        <div className="df">
          <Image
            src={image}
            alt="pizza"
            className="autocomplite-product-cart-img"
          />
          <Title className="autocomplite-product-cart-title">{name}</Title>
        </div>
        <div className="autocomplite-product-cart-price">
          от {fixedPrice} руб.
        </div>
      </div>

      <Separator />
    </>
  );
};

export default AutoCompliteProductCart;
