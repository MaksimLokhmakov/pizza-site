import { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext } from "../../../interfaces";
import AutoComplite from "../AutoComplite";
import Search from "../Search";
import "./style.scss";

const SearchWithAutoComplite = observer(() => {
  const { selectionStore } = useContext(StoresContext) as IStoresContext;
  const { searchValue } = selectionStore;

  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isAutoVisible, setIsAutoVisible] = useState(false);
  const [autocompliteStyles, setAutocompliteStyles] = useState({
    opacity: 0,
  });

  const isSearchNotEmpty = searchValue.length > 0;

  useEffect(() => {
    if (isOnFocus) {
      setAutocompliteStyles({ opacity: 1 });
    }
  }, [isOnFocus]);

  const handleFocus = () => {
    setIsAutoVisible(true);
    setIsOnFocus(true);
  };

  const handleBlur = () => {
    setIsOnFocus(false);
    setAutocompliteStyles({ opacity: 0 });

    setTimeout(() => setIsAutoVisible(false), 300);
  };

  const classes = [
    "search-default",
    isOnFocus && isSearchNotEmpty ? "search-focus" : "",
  ].join(" ");

  return (
    <div className={classes}>
      <Search
        isOnFocus={isOnFocus && isSearchNotEmpty}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <AutoComplite
        visible={isAutoVisible && isSearchNotEmpty}
        style={autocompliteStyles}
      />
    </div>
  );
});

export default SearchWithAutoComplite;
