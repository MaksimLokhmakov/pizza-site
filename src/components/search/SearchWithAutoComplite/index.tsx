import { useCallback, useState, useEffect } from "react";
import AutoComplite from "../AutoComplite";
import Search from "../Search";
import "./style.scss";

const SearchWithAutoComplite = () => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isAutoVisible, setIsAutoVisible] = useState(false);
  const [autocompliteStyles, setAutocompliteStyles] = useState({
    opacity: 0,
  });

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

  const classes = ["search-default", isOnFocus ? "search-focus" : ""].join(" ");

  return (
    <div className={classes}>
      <Search isOnFocus={isOnFocus} onFocus={handleFocus} onBlur={handleBlur} />
      <AutoComplite visible={isAutoVisible} style={autocompliteStyles} />
    </div>
  );
};

export default SearchWithAutoComplite;
