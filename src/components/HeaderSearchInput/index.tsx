import { FC } from "react";
import searchIcon from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg";
import { useInput } from "../../hooks";
import "./style.scss";

const HeaderSearchInput: FC = () => {
  const searchInputController = useInput();

  return (
    <div className="header__search">
      <img src={searchIcon} alt="searchIcon" />
      <input type="text" placeholder="Поиск..." {...searchInputController} />
    </div>
  );
};

export default HeaderSearchInput;
