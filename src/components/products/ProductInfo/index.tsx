import {
  FC,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import {
  IPizza,
  IStoresContext,
  IPizzaAddon,
  IPizzaIngredient,
} from "../../../interfaces";
import {
  optionBarPizzaDoughOptions,
  optionBarPizzaSizeOptions,
  PizzaDough,
  PizzaSize,
} from "../../../utils/consts/consts";
import { useNavigate, useParams } from "react-router-dom";
import { StoresContext } from "../../StoresProvider";
import { Image, Button, Chip } from "../../common";
import { getPizzaImgClass } from "../../../utils/getPizzaImgClass";
import IngredientsList from "../ingredients/IngredientsList";
import OptionBar from "../../OptionBar";
import AddonsList from "../addons/AddonsList";
import "./style.scss";
import classes from "../../../utils/classes";

const ProductInfo: FC = () => {
  const { pizzaStore, shoppingCartStore } = useContext(
    StoresContext
  ) as IStoresContext;
  const params = useParams();
  const navigate = useNavigate();

  const currentPizza = pizzaStore.getPizzaByID(params.id as string);

  const { id, name, type, ingredients, variants, addons } =
    currentPizza as IPizza;

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
    variants: [variants[0]],
  });

  const { size, weight, price, dough, image } = formedPizza.variants[0];

  useLayoutEffect(() => {
    handleChangeFormedAddonsPrice();
    // eslint-disable-next-line
  }, [options.size]);

  useLayoutEffect(() => {
    handleChangeVariant();
    // eslint-disable-next-line
  }, [options]);

  const handleChangeVariant = useCallback(() => {
    const { dough: firstOption, size: secondOption } = options;

    const getDough = (option: number) => {
      switch (option) {
        case 0:
          return PizzaDough.TRADITIONAL;
        case 1:
          return PizzaDough.THIN;
      }
    };

    const getSize = (option: number) => {
      switch (option) {
        case 0:
          return PizzaSize.SMALL;
        case 1:
          return PizzaSize.MEDIUM;
        case 2:
          return PizzaSize.BIG;
      }
    };

    let dough = getDough(firstOption);
    let size = getSize(secondOption);

    const currentVariant = variants.filter((variant) => {
      const isVariantSimilar = variant.dough.toLowerCase() === dough;
      const isSizeSimilar = variant.size === size;

      return isVariantSimilar && isSizeSimilar;
    });

    setFormedPizza((prev) => {
      return { ...prev, variants: currentVariant };
    });
  }, [options]);

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
          const newAddons = prev.addons
            .filter((current) => current.id !== addon.id)
            .sort();

          return { ...prev, addons: newAddons };
        });

        return;
      }

      setFormedPizza((prev) => {
        return { ...prev, addons: [...prev.addons, addon].sort() };
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

  const handleSubmit = () => {
    shoppingCartStore.addProduct(formedPizza);
    localStorage.setItem(`${currentPizza.id}`, JSON.stringify(currentPizza));

    navigate(-1);
  };

  const addonsPriceСonsideringSize = useMemo(() => {
    const addedValueByDefault: number = 0.4;
    const factor: number = options.size;
    const currentAddedValue: number = addedValueByDefault * factor;

    return addons.map(({ ...addon }) => {
      addon.price = addon.price + currentAddedValue;

      return addon;
    });
    // eslint-disable-next-line
  }, [options.size]);

  const handleChangeFormedAddonsPrice = useCallback(() => {
    setFormedPizza((prev) => {
      const formedAddonsWithCurrentPrice = addonsPriceСonsideringSize.filter(
        (addon) =>
          formedPizza.addons.find((formedAddon) => formedAddon.id === addon.id)
      );

      return { ...prev, addons: formedAddonsWithCurrentPrice };
    });
    // eslint-disable-next-line
  }, [options.size]);

  const buttonChild = useMemo(() => {
    let addonsPrice = formedPizza.addons.reduce(
      (addonsPrice, currenAddon) => (addonsPrice += currenAddon.price),
      0
    );

    return `Добавить в корзину за ${(price + addonsPrice).toFixed(2)} руб.`;
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, [options]);

  const imgClasses = classes([getPizzaImgClass(size), "form-img"]);

  return (
    <div className="form df">
      <div className="form__left  df">
        <div className="form__left-img">
          <Image src={image} alt="pizzaimg" className={imgClasses} />
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

        <Button className="product-info-submit-button" onClick={handleSubmit}>
          <Chip
            className="product-info-submit-chip"
            theme="colloring-light-deep"
          >
            {buttonChild}
          </Chip>
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
