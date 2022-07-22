import { FC } from "react";
import AutoCompliteProductCart from "../AutoCompliteProductCart";
import { Link, useLocation } from "react-router-dom";
import IPizza from "../../../interfaces/IPizza";
import { Routes } from "../../../interfaces/IRoute";
import "./style.scss";

interface AutoCompliteProductsListProps {
  filteredPizzas: IPizza[];
}

const AutoCompliteProductsList: FC<AutoCompliteProductsListProps> = ({
  filteredPizzas,
}) => {
  const location = useLocation();

  return (
    <div>
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
};

export default AutoCompliteProductsList;
