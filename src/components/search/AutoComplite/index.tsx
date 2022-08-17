import { FC, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext, IPizza } from "../../../interfaces";
import { Routes } from "../../../interfaces/IRoute";
import AutoCompliteProductCart from "../AutoCompliteProductCart";
import "./style.scss";

interface AutoCompliteProps {
  visible: boolean;
  style: object;
}

const AutoComplite: FC<AutoCompliteProps> = observer(({ visible, style }) => {
  const { pizzaStore, selectionStore } = useContext(
    StoresContext
  ) as IStoresContext;
  const location = useLocation();

  const filteredPizzas =
    selectionStore.searchValue &&
    pizzaStore.pizzas &&
    pizzaStore.pizzas.filter((pizza: IPizza) => {
      const lcName = pizza.name.toLowerCase();
      const lcSearchValue = selectionStore.searchValue.toLowerCase();

      return lcName.includes(lcSearchValue);
    });

  if (!visible) {
    return null;
  }

  return (
    <div className="autocomplite" style={style}>
      {filteredPizzas &&
        filteredPizzas.map(({ id, name, variants }: IPizza) => {
          const lowestPriceVariant = variants[0];
          const { price, image } = lowestPriceVariant;

          const path = Routes.PRODUCT_ROUTE.replace(/:id/, id);

          return (
            <Link key={id} to={path} state={{ backgroundLocation: location }}>
              <AutoCompliteProductCart
                name={name}
                price={price}
                image={image}
              />
            </Link>
          );
        })}
    </div>
  );
});

export default AutoComplite;
