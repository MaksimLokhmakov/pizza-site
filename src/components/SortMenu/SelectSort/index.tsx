import { FC, useRef, useState } from "react";
import arrowDownIcon from "../../../assets/icons/Vector.svg";
import { useHover } from "../../../hooks";
import { sortTypes } from "../../../utils/consts/consts";
import "./style.scss";

interface SelectSortProps {
  currentSortType?: string;
  setCurrentSortType?: () => void;
}

const SelectSort: FC<SelectSortProps> = ({
  currentSortType,
  setCurrentSortType,
}) => {
  const [sortType, setSortType] = useState<string>("");
  const sortMenuRef = useRef(null);
  const isHover = useHover(sortMenuRef);

  return (
    <div ref={sortMenuRef} className="menu__sort">
      <img src={arrowDownIcon} alt="arrowDownIcon" />
      <span>
        Сортировка по: <p>{sortType}</p>
      </span>

      {isHover && (
        <div className="menu__sort-select">
          <ul>
            {sortTypes.map((type) => (
              <li key={type} onClick={() => setSortType(type)}>
                {type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectSort;
