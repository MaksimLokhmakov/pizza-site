import { ChangeEvent, FC, useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { useDebounce } from "../../../hooks";
import { Chip, Image } from "../../common";
import searchIcon from "../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg";
import "./style.scss";

const HeaderSearch: FC = observer(() => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const { selectionStore } = useContext(Context);
  const { searchValue } = selectionStore;

  const someFunc = useDebounce((value) => console.log(value), 600);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    selectionStore.setSearchValue(e.target.value);
    someFunc(e.target.value);
  };

  const handleFocus = () => {
    setIsOnFocus((prev) => !prev);
  };

  return (
    <Chip className="search-wrapper" theme="outline-gray">
      <Image
        src={searchIcon}
        alt="searchIcon"
        className="search-wrapper-icon"
      />
      <input
        type="text"
        placeholder="Поиск..."
        className="search-wrapper-input"
        value={searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </Chip>
  );
});

export default HeaderSearch;
