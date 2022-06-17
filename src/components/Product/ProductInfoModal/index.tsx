import { FC, useCallback, useMemo, useState } from "react";
import IPizza from "../../../interfaces/IPizza";
import { getPizzaImgClass } from "../../../utils/getPizzaImgClass";
import Button, { ButtonTheme } from "../../Buttons/Button";
import Popup from "../../Popup";
import OptionBar from "../../OptionBar";
import {
  optionBarPizzaDoughOptions,
  optionBarPizzaSizeOptions,
} from "../../../utils/consts/consts";
import pizzaimg from "../../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";
import "./style.scss";

interface ProductInfoModalProps {
  product: IPizza;
  isOpened: boolean;
  onClose: () => void;
}

const ProductInfoModal: FC<ProductInfoModalProps> = ({
  product,
  isOpened,
  onClose,
}) => {
  const [current, setCurrent] = useState(product);
  const { name, size, price, dough, minWeight } = current;

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

  const buttonChild = useMemo(() => {
    return `Добавить в корзину за ${price} руб.`;
  }, [price]);

  return (
    <Popup isOpened={isOpened} onClose={onClose}>
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
              options={optionBarPizzaDoughOptions}
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
