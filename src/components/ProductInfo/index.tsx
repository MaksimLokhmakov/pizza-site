import {
  FC,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../..";
import Button, { ButtonTheme } from "../Buttons/Button";
import IngredientsList from "../IngredientsList";
import OptionBar from "../OptionBar";
import AddonsList from "../AddonsList";
import IPizza from "../../interfaces/IPizza";
import { getPizzaImgClass } from "../../utils/getPizzaImgClass";
import {
  optionBarPizzaDoughOptions,
  optionBarPizzaSizeOptions,
} from "../../utils/consts/consts";
import "./style.scss";
import IPizzaAddon from "../../interfaces/IPizzaAddon";
import IPizzaIngredient from "../../interfaces/IPizzaIngredient";

const ProductInfo: FC = () => {
  const { pizzaStore } = useContext(Context);
  const params = useParams();

  const currentPizza: IPizza = pizzaStore.getPizzaByID(params.id);
  const { id, name, type, ingredients, variants, addons } = currentPizza;

  const [options, setOptions] = useState({
    dough: optionBarPizzaDoughOptions[0].value,
    size: optionBarPizzaSizeOptions[1].value,
  });
  const [formedPizza, setFormedPizza] = useState<IPizza>({
    id,
    name,
    type,
    ingredients: JSON.parse(JSON.stringify(ingredients)),
    addons: [],
    variants: [variants[1]],
  });
  const { size, weight, price, dough, image } = formedPizza.variants[0];

  useLayoutEffect(() => {
    handleChangeFormedAddonsPrice();
    // eslint-disable-next-line
  }, [options.size]);

  useLayoutEffect(() => {
    handleChangeVariant();
  }, [options]);

  const handleChangeVariant = () => {
    const { dough: firstOption, size: secondOption } = options;
    let variantId = firstOption + secondOption;

    if (firstOption === 1) {
      // if dough === 'тонкое'
      variantId += 1;
    }

    const currentVariant = variants.filter(
      (variant) => variant.id === variantId.toString()
    );

    setFormedPizza((prev) => {
      return { ...prev, variants: currentVariant };
    });
  };

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

  const handleChangeAddons = useCallback(
    (addon: IPizzaAddon) => {
      if (formedPizza.addons.includes(addon)) {
        setFormedPizza((prev) => {
          const newAddons = prev.addons.filter(
            (current) => current.id !== addon.id
          );

          return { ...prev, addons: newAddons };
        });

        return;
      }

      setFormedPizza((prev) => {
        return { ...prev, addons: [...prev.addons, addon] };
      });
    },
    [formedPizza.addons]
  );

  const handleChangeIngredients = useCallback(
    (ingredient: IPizzaIngredient) => {
      const isFormedIngredientsIncludesCurrent = formedPizza.ingredients.find(
        (current) => current.id === ingredient.id
      );

      if (isFormedIngredientsIncludesCurrent) {
        setFormedPizza((prev) => {
          const newIngredients = prev.ingredients.filter(
            (current) => current.id !== ingredient.id
          );

          return { ...prev, ingredients: newIngredients };
        });

        return;
      }

      setFormedPizza((prev) => {
        return { ...prev, ingredients: [...prev.ingredients, ingredient] };
      });
    },
    [formedPizza.ingredients]
  );

  const addonsPriceСonsideringSize = useMemo(() => {
    const addedValueByDefault: number = 0.4;
    const factor: number = options.size;
    const currentAddedValue: number = addedValueByDefault * factor;

    return addons.map(({ ...addon }) => {
      addon.price = addon.price + currentAddedValue;

      return addon;
    });
  }, [options.size]);

  const handleChangeFormedAddonsPrice = useCallback(() => {
    setFormedPizza((prev) => {
      const formedAddonsWithCurrentPrice = addonsPriceСonsideringSize.filter(
        (addon) =>
          formedPizza.addons.find((formedAddon) => formedAddon.id === addon.id)
      );

      return { ...prev, addons: formedAddonsWithCurrentPrice };
    });
  }, [options.size]);

  const buttonChild = useMemo(() => {
    let addonsPrice = formedPizza.addons.reduce(
      (addonsPrice, currenAddon) => (addonsPrice += currenAddon.price),
      0
    );

    return `Добавить в корзину за ${(price + addonsPrice).toFixed(2)} руб.`;
  }, [price, formedPizza.addons]);

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
    <div className="form df">
      <div className="form__left  df">
        <div className="form__left-img">
          <img src={image} alt="pizzaimg" className={getPizzaImgClass(size)} />
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
              <IngredientsList
                onClickIngredient={handleChangeIngredients}
                formedIngredients={formedPizza.ingredients}
                ingredients={ingredients}
                isEditable={true}
              />
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

            <AddonsList
              onClickAddon={handleChangeAddons}
              formedAddons={formedPizza.addons}
              addons={addonsPriceСonsideringSize}
            />
          </main>
        </div>

        <footer className="form__right-footer df">
          <Button theme={ButtonTheme.COLLORING_LIGHT_DEEP}>
            {buttonChild}
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ProductInfo;
