import { FC, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../..";
import { Routes } from "../../../interfaces/IRoute";
import { observer } from "mobx-react-lite";
import IPizza from "../../../interfaces/IPizza";
import AutoCompliteProductCart from "../AutoCompliteProductCart";
import "./style.scss";
import { IPizzaStore } from "../../../stores/PizzaStore";
import { ISelectionStore } from "../../../stores/SelectionStore";

interface AutoCompliteProps {
  visible: boolean;
  style: object;
}

const AutoComplite: FC<AutoCompliteProps> = observer(({ visible, style }) => {
  const {
    pizzaStore,
    selectionStore,
  }: { pizzaStore: IPizzaStore; selectionStore: ISelectionStore } =
    useContext(Context);
  const location = useLocation();

  const filteredPizzas =
    selectionStore.searchValue &&
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
