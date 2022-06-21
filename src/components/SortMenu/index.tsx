import { useContext } from "react";
import Button, { ButtonTheme } from "../Buttons/Button";
import SelectSort from "./SelectSort";
import { FiltrationType } from "../../utils/consts/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import "./style.scss";

const SortMenu = observer(() => {
  const { selectionStore } = useContext(Context);
  const { filtrationType } = selectionStore;

  const handleChangeFiltrationType = (type: FiltrationType) => {
    selectionStore.setFiltrationType(type);
  };

  return (
    <section className="menu">
      <ul className="menu__filtretion">
        {Object.values(FiltrationType).map((type) => {
          const isFilterActive = filtrationType === type;

          return (
            <li key={type} onClick={() => handleChangeFiltrationType(type)}>
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
});

export default SortMenu;
