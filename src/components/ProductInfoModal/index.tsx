import { FC, useCallback, useContext, useMemo, useState } from "react";
import IPizza, { PizzaDough, PizzaSize } from "../../interfaces/IPizza";
import { getPizzaImgClass } from "../../utils/getPizzaImgClass";
import Button, { ButtonTheme } from "../Buttons/Button";
import Popup from "../Popup";
import OptionBar from "../OptionBar";
import {
  optionBarPizzaDoughOptions,
  optionBarPizzaSizeOptions,
} from "../../utils/consts/consts";
import pizzaimg from "../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";
import "./style.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../..";
import IngredientsList from "../IngredientsList";

interface ProductInfoModalProps {
  isOpened: boolean;
}

const ProductInfoModal: FC<ProductInfoModalProps> = ({ isOpened }) => {
  const { pizzaStore } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();

  const currentPizza = pizzaStore.getPizzaByID(params.id);
  const [current, setCurrent] = useState<IPizza>(currentPizza);
  const { name, size, price, dough, minWeight, ingredients } = current;

  const handleChangeDough = useCallback((current: string) => {
    setCurrent((prev) => {
      return { ...prev, dough: current };
    });
  }, []);

  const handleChangeSize = useCallback((current: string) => {
    const numberCurrent = Number(current);

    setCurrent((prev) => {
      return { ...prev, size: numberCurrent };
    });
  }, []);

  const handleClose = () => {
    navigate(-1);
  };

  const buttonChild = useMemo(() => {
    return `Добавить в корзину за ${price.toFixed(2)} руб.`;
  }, [price]);

  const optionBarPizzaDoughCurrentOptions = useMemo(() => {
    const isSmallSize = size === PizzaSize.SMALL;

    return optionBarPizzaDoughOptions.map((option) => {
      const isThinDough = option.value === PizzaDough.THIN;

      if (isThinDough && isSmallSize) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }

      return option;
    });
  }, [size]);

  return (
    <Popup isOpened={isOpened} onClose={handleClose}>
      <div className="form df">
        <div className="form__left  df">
          <div className="form__left-img">
            <img
              src={pizzaimg}
              alt="pizzaimg"
              className={getPizzaImgClass(size)}
            />
          </div>
        </div>

        <div className="form__right">
          <header className="form__right-header">
            {name}
            <p>
              {size} см, {dough} тесто, {minWeight} г
            </p>
          </header>

          <main className="form__right-main">
            <div className="form__right-main-ingredients">
              <IngredientsList ingredients={ingredients} isEditable={true} />
            </div>

            <OptionBar
              barName="size"
              currentOption={size}
              onChange={handleChangeSize}
              options={optionBarPizzaSizeOptions}
            />

            <OptionBar
              barName="dough"
              currentOption={dough}
              onChange={handleChangeDough}
              options={optionBarPizzaDoughCurrentOptions}
            />
          </main>

          <footer className="form__right-footer df">
            <Button theme={ButtonTheme.COLLORING_LIGHT_DEEP}>
              {buttonChild}
            </Button>
          </footer>
        </div>
      </div>
    </Popup>
  );
};

export default ProductInfoModal;
