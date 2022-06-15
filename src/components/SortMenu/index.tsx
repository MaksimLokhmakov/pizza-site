import Button, { ButtonTheme } from "../Buttons/Button";
import SelectSort from "./SelectSort";
import { filterTypes } from "../../utils/consts/consts";
import "./style.scss";

const SortMenu = () => {
  return (
    <section className="menu">
      <ul className="menu__filtretion">
        {filterTypes.map((type) => (
          <li>
            <Button
              key={type}
              onClick={() => console.log(type)}
              theme={ButtonTheme.COLLORING_GRAY}
            >
              {type}
            </Button>
          </li>
        ))}
      </ul>

      <SelectSort />
    </section>
  );
};

export default SortMenu;
