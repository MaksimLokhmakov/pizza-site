import { useContext, useRef } from "react";
import { Button, Group, Image, Dropdown } from "../../common";
import { observer } from "mobx-react-lite";
import { useHover } from "../../../hooks";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext } from "../../../interfaces";
import { SortType } from "../../../utils/consts/consts";
import arrowDownIcon from "../../../assets/icons/Vector.svg";
import "./style.scss";

const SortMenu = observer(() => {
  const { selectionStore } = useContext(StoresContext) as IStoresContext;
  const { sortType } = selectionStore;
  const sortMenuRef = useRef(null);
  const isHover = useHover(sortMenuRef);

  const handleChangeSortType = (currentType: SortType) => {
    selectionStore.sortType = currentType;
  };

  return (
    <div ref={sortMenuRef} className="sort-menu">
      <Image
        src={arrowDownIcon}
        alt="arrowDownIcon"
        className="sort-menu-img"
      />
      <span>
        Сортировка: <p>{sortType}</p>
      </span>

      <Dropdown visible={isHover} className="sort-menu-select">
        <Group vertical>
          {Object.values(SortType).map((type) => {
            const handleClick = () => handleChangeSortType(type);

            return (
              <Button
                key={type}
                className="sort-menu-select-button"
                onClick={handleClick}
              >
                {type}
              </Button>
            );
          })}
        </Group>
      </Dropdown>
    </div>
  );
});

export default SortMenu;
