import { useContext } from "react";
import { Chip, Group, Button } from "../../common";
import { observer } from "mobx-react-lite";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext } from "../../../interfaces";
import { FiltrationType } from "../../../utils/consts/consts";
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
        const isFilterActive = filtrationType === type;
        const classes = ["sort-chip", isFilterActive ? "active" : ""].join(" ");

        return (
          <Button key={type} onClick={() => handleChangeFiltrationType(type)}>
            <Chip className={classes} theme="colloring-gray">
              {type}
            </Chip>
          </Button>
        );
      })}
    </Group>
  );
});

export default FiltrationMenu;
