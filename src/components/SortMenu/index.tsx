import { useState } from "react";
import Button, { ButtonTheme } from "../Buttons/Button";
import SelectSort from "./SelectSort";
import { filterTypes } from "../../utils/consts/consts";
import "./style.scss";

const SortMenu = () => {
  const [filtretionType, setFiltretionType] = useState("Все");

  return (
    <section className="menu">
      <ul className="menu__filtretion">
        {filterTypes.map((type) => {
          const isFilterActive = filtretionType === type;

          return (
            <li key={type} onClick={() => setFiltretionType(type)}>
              <Button
                key={type}
                theme={ButtonTheme.COLLORING_GRAY}
                active={isFilterActive}
              >
                {type}
              </Button>
            </li>
          );
        })}
      </ul>

      <SelectSort />
    </section>
  );
};

export default SortMenu;
