import FiltrationMenu from "./FiltrationMenu";
import SortMenu from "./SortMenu";

const SelectionMenu = () => {
  return (
    <section className="menu">
      <FiltrationMenu />
      <SortMenu />
    </section>
  );
};

export default SelectionMenu;
