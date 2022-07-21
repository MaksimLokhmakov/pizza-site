import { ChangeEvent, FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { Chip, Image } from "../../common";
import searchIcon from "../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg";
import "./style.scss";
import { ISelectionStore } from "../../../stores/SelectionStore";

interface SearchProps {
  isOnFocus: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const Search: FC<SearchProps> = observer(({ isOnFocus, onFocus, onBlur }) => {
  const { selectionStore }: { selectionStore: ISelectionStore } =
    useContext(Context);
  const { searchValue } = selectionStore;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    selectionStore.searchValue = e.target.value;
  };

  const classes = [
    "search-wrapper",
    isOnFocus ? "search-wrapper-focus" : "",
  ].join(" ");

  return (
    <Chip className={classes}>
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
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Chip>
  );
});

export default Search;
