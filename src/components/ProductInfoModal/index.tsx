import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../..";
import Button, { ButtonTheme } from "../Buttons/Button";
import Popup from "../Popup";
import IngredientsList from "../IngredientsList";
import OptionBar from "../OptionBar";
import AddonsList from "../AddonsList";
import IPizzaVariant from "../../interfaces/IPizzaVariant";
import IPizza from "../../interfaces/IPizza";
import { getPizzaImgClass } from "../../utils/getPizzaImgClass";
import {
  optionBarPizzaDoughOptions,
  optionBarPizzaSizeOptions,
} from "../../utils/consts/consts";
import "./style.scss";

interface ProductInfoModalProps {
  isOpened: boolean;
}

const ProductInfoModal: FC<ProductInfoModalProps> = ({ isOpened }) => {
  const { pizzaStore } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();

  const currentPizza: IPizza = pizzaStore.getPizzaByID(params.id);
  const { name, ingredients, variants, addons } = currentPizza;

  const [options, setOptions] = useState({
    dough: optionBarPizzaDoughOptions[0].value,
    size: optionBarPizzaSizeOptions[1].value,
  });
  const [currentVariant, setCurrentVariant] = useState<IPizzaVariant>(
    variants[1]
  );
  const { size, weight, price, dough, image } = currentVariant;

  useEffect(() => {
    handleChangeVariant();
    // eslint-disable-next-line
  }, [options]);

  function handleChangeVariant() {
    const { dough: firstOption, size: secondOption } = options;
    let variantId = firstOption + secondOption;

    if (firstOption === 1) {
      // if dough === 'тонкое'
      variantId += 1;
    }

    const variant = variants.filter(
      (variant) => variant.id === variantId.toString()
    );

    setCurrentVariant(variant[0]);
  }

  const handleChangeDough = useCallback((current: number) => {
    setOptions((prev) => {
      return { ...prev, dough: current };
    });
  }, []);

  const handleChangeSize = useCallback((current: number) => {
    setOptions((prev) => {
      return { ...prev, size: current };
    });
  }, []);

  const handleClose = () => {
    navigate(-1);
  };

  const buttonChild = useMemo(() => {
    return `Добавить в корзину за ${price.toFixed(2)} руб.`;
  }, [price]);

  const optionBarPizzaDoughCurrentOptions = useMemo(() => {
    const isSmallSize = options.size === optionBarPizzaSizeOptions[0].value;

    return optionBarPizzaDoughOptions.map((option) => {
      const isThinDough = option.value === optionBarPizzaDoughOptions[1].value;

      if (isThinDough && isSmallSize) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }

      return option;
    });
  }, [options]);

  return (
    <Popup isOpened={isOpened} onClose={handleClose}>
      <div className="form df">
        <div className="form__left  df">
          <div className="form__left-img">
            <img
              src={image}
              alt="pizzaimg"
              className={getPizzaImgClass(size)}
            />
          </div>
        </div>

        <div className="form__right">
          <div style={{ height: "90%", overflow: "scroll" }}>
            <header className="form__right-header">
              {name}
              <p>
                {size} см, {dough} тесто, {weight} г
              </p>
            </header>

            <main className="form__right-main">
              <div className="form__right-main-ingredients">
                <IngredientsList ingredients={ingredients} isEditable={true} />
              </div>

              <OptionBar
                barName="size"
                currentOption={options.size}
                onChange={handleChangeSize}
                options={optionBarPizzaSizeOptions}
              />

              <OptionBar
                barName="dough"
                currentOption={options.dough}
                onChange={handleChangeDough}
                options={optionBarPizzaDoughCurrentOptions}
              />

              <AddonsList addons={addons} />
            </main>
          </div>

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
