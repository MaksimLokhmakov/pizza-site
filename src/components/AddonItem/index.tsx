import { FC, useState } from "react";
import IPizzaAddon from "../../interfaces/IPizzaAddon";
import selectedIcon from "../../assets/icons/selected-icon.svg";
import "./style.scss";

interface AddonItemProps {
  addon: IPizzaAddon;
  onClick?: () => void;
}

const AddonItem: FC<AddonItemProps> = ({ addon, onClick }) => {
  const { name, price, image } = addon;
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
    onClick && onClick();
  };

  return (
    <button
      className={["addon df dc", isSelected && "selected-addon"].join(" ")}
      onClick={handleClick}
    >
      <img className="addon-image" src={image} alt={name} />
      <h2 className="addon-title">{name}</h2>
      <span className="addon-price">{price.toFixed(2) + " руб."}</span>
      {isSelected && (
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
