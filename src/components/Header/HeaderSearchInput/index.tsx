import { ChangeEvent, FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import searchIcon from "../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg";
import "./style.scss";
import { useDebounce } from "../../../hooks";

const HeaderSearchInput: FC = observer(() => {
  const { selectionStore } = useContext(Context);
  const { searchValue } = selectionStore;

  const someFunc = useDebounce(() => console.log(searchValue), 400);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    selectionStore.setSearchValue(e.target.value);
    someFunc();
  };

  return (
    <div className="header__search">
      <img src={searchIcon} alt="searchIcon" />
      <input
        type="text"
        placeholder="Поиск..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
});

export default HeaderSearchInput;
