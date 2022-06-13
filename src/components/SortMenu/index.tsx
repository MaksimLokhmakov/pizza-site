import Button, { ButtonTheme } from "../Buttons/Button";
import SelectSort from "../SelectSort";
import { filterTypes } from "../../utils/consts/consts";
import "./style.scss";

const SortMenu = () => {
  return (
    <section className="menu">
      <div className="menu__filtretion">
        {filterTypes.map((type) => (
          <Button
            key={type}
            onClick={() => console.log(type)}
            theme={ButtonTheme.COLLORING_GRAY}
          >
            {type}
          </Button>
        ))}
      </div>

      <SelectSort />
    </section>
  );
};

export default SortMenu;
