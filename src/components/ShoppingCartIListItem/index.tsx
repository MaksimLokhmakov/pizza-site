import img from "../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";
import minusIcon from "../../assets/icons/remove_FILL0_wght400_GRAD0_opsz48.svg";
import plusIcon from "../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";
import Button, { ButtonTheme } from "../Buttons/ButtonPrev";
import "./style.scss";

const ShippingCartListItem = () => {
  return (
    <article className="df shoppingcart-list-item">
      <div className="df top">
        <img src={img} alt="img" />
        <div className="top-right">
          <h4>Ветчина и грибы</h4>
          <p className="p2">Средняя 30 см, традиционное тесто</p>
          <p>+ острая чоризо, митболы, острый халапеньо</p>
          <p>- цыпленок, бекон</p>
        </div>
      </div>
      <div className="df bottom">
        <span>17,90 руб.</span>
        <div>
          <Button theme={ButtonTheme.OUTLINE_GRAY}>
            <button>
              <img src={minusIcon} alt="minusIcon" />
            </button>
            <span>1</span>
            <button>
              <img src={plusIcon} alt="plusIcon" />
            </button>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ShippingCartListItem;
