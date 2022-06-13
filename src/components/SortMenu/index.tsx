import Button, { ButtonTheme } from "../Buttons/Button";
import SelectSort from "../SelectSort";
import "./style.scss";

const SortMenu = () => {
  const filtretionTypes = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <section className="menu">
      <div className="menu__filtretion">
        {filtretionTypes.map((type) => (
          <Button
            key={type}
            onClick={() => console.log(type)}
            theme={ButtonTheme.COLLORING_GRAY}
          >
            {type}
          </Button>
        ))}
      </div>

      <SelectSort />
    </section>
  );
};

export default SortMenu;
