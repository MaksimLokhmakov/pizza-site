import { useContext } from "react";
import { Chip, Group, Button } from "../../common";
import { observer } from "mobx-react-lite";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext } from "../../../interfaces";
import { FiltrationType } from "../../../utils/consts/consts";
import classes from "../../../utils/classes";
import "./style.scss";

const FiltrationMenu = observer(() => {
  const { selectionStore } = useContext(StoresContext) as IStoresContext;
  const { filtrationType } = selectionStore;

  const handleChangeFiltrationType = (type: FiltrationType) => {
    selectionStore.filtrationType = type;
  };

  return (
    <Group className="button-filtration-group">
      {Object.values(FiltrationType).map((type) => {
        const active = filtrationType === type;
        const classNames = classes(["sort-chip", { active }]);

        return (
          <Button key={type} onClick={() => handleChangeFiltrationType(type)}>
            <Chip className={classNames} theme="colloring-gray">
              {type}
            </Chip>
          </Button>
        );
      })}
    </Group>
  );
});

export default FiltrationMenu;
