import { FC } from "react";
import IPizzaAddon from "../../interfaces/IPizzaAddon";
import selectedIcon from "../../assets/icons/selected-icon.svg";
import "./style.scss";

interface AddonItemProps {
  addon: IPizzaAddon;
  dataSelected: boolean;
  onClick?: (addon: IPizzaAddon) => void;
}

const AddonItem: FC<AddonItemProps> = ({
  addon,
  onClick,
  dataSelected = false,
}) => {
  const { name, price, image } = addon;

  const handleClick = () => {
    onClick && onClick(addon);
  };

  return (
    <button
      className={["addon df dc"].join(" ")}
      data-selected={dataSelected}
      type="button"
      onClick={handleClick}
    >
      <img className="addon-image" src={image} alt={name} />
      <h2 className="addon-title">{name}</h2>
      <span className="addon-price">{price.toFixed(2) + " руб."}</span>
      {dataSelected && (
        <img
          src={selectedIcon}
          alt="selected"
          className="selected-addon-icon"
        />
      )}
    </button>
  );
};

export default AddonItem;
