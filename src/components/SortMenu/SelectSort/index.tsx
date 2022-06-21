import { useContext, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useHover } from "../../../hooks";
import { Context } from "../../..";
import { SortType } from "../../../utils/consts/consts";
import arrowDownIcon from "../../../assets/icons/Vector.svg";
import "./style.scss";

const SelectSort = observer(() => {
  const { selectionStore } = useContext(Context);
  const { sortType } = selectionStore;
  const sortMenuRef = useRef(null);
  const isHover = useHover(sortMenuRef);

  const handleChangeSortType = (currentType: SortType) => {
    selectionStore.setSortType(currentType);
  };

  return (
    <div ref={sortMenuRef} className="menu__sort">
      <img src={arrowDownIcon} alt="arrowDownIcon" />
      <span>
        Сортировка: <p>{sortType}</p>
      </span>

      {isHover && (
        <div className="menu__sort-select">
          <ul>
            {Object.values(SortType).map((type) => (
              <li key={type} onClick={() => handleChangeSortType(type)}>
                {type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SelectSort;
