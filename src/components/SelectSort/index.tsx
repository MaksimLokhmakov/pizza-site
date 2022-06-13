import { FC, useRef, useState } from "react";
import useHover from "../../hooks/useHover";
import arrowDownIcon from "../../assets/icons/Vector.svg";
import "./style.scss";

interface ISelectSort {
  currentSortType?: string;
  setCurrentSortType?: () => void;
}

const SelectSort: FC<ISelectSort> = ({
  currentSortType,
  setCurrentSortType,
}) => {
  const sortedTypes = ["популярности", "цене", "алфавиту"];

  const [sortType, setSortType] = useState<string>("популярности");
  const sortMenuRef = useRef(null);
  const isHover = useHover(sortMenuRef);

  const onTypeClick = (type: string) => {
    setSortType(type);
  };

  return (
    <div ref={sortMenuRef} className="menu__sort">
      <img src={arrowDownIcon} alt="arrowDownIcon" />
      <span>
        Сортировка по: <p>{sortType}</p>
      </span>

      {isHover && (
        <div className="menu__sort-select">
          <ul>
            {sortedTypes.map((type) => (
              <li key={type} onClick={() => onTypeClick(type)}>
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
