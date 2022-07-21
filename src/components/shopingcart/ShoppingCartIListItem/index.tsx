import { Title, Image, Chip, Separator, Button } from "../../common";
import img from "../../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";
import minusIcon from "../../../assets/icons/remove_FILL0_wght400_GRAD0_opsz48.svg";
import plusIcon from "../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";
import "./style.scss";

const ShoppingCartListItem = () => {
  return (
    <article className="shoppingcart-item df">
      <main className="df">
        <Image src={img} alt="img" className="item-img" />

        <div className="shoppingcart-item-description">
          <Title className="description-title">Ветчина и грибы</Title>
          <p>Средняя 30 см, традиционное тесто</p>
          <p>
            <i className="sign">
              <Image src={plusIcon} alt="plusIcon" className="sign-img" />
            </i>
            острая чоризо, митболы, острый халапеньо
          </p>
          <p>
            <i className="sign">
              <Image src={minusIcon} alt="minusIcon" className="sign-img" />
            </i>
            цыпленок, бекон
          </p>
        </div>
      </main>

      <Separator className="item-separator" />

      <footer className="item-footer">
        <span className="footer-price">17,90 руб.</span>

        <Chip className="footer-counter" theme="colloring-gray">
          <Button className="counter-button">
            <Image
              src={minusIcon}
              alt="minusIcon"
              className="counter-button-img"
            />
          </Button>
          <span>1</span>
          <Button className="counter-button">
            <Image
              src={plusIcon}
              alt="plusIcon"
              className="counter-button-img"
            />
          </Button>
        </Chip>
      </footer>
    </article>
  );
};

export default ShoppingCartListItem;
