import { FC } from "react";
import { Button, Image, Title } from "../../../common";
import IPizzaAddon from "../../../../interfaces/IPizzaAddon";
import selectedIcon from "../../../../assets/icons/selected-icon.svg";
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
  const classes = ["addon df dc"].join(" ");

  const handleClick = () => {
    onClick && onClick(addon);
  };

  return (
    <Button
      className={classes}
      dataSelected={dataSelected}
      buttonType="button"
      onClick={handleClick}
    >
      <Image className="addon-image" src={image} alt={name} />
      <Title className="addon-title">{name}</Title>
      <span className="addon-price">{price.toFixed(2) + " руб."}</span>
      {dataSelected && (
        <Image
          src={selectedIcon}
          alt="selected"
          className="selected-addon-icon"
        />
      )}
    </Button>
  );
};

export default AddonItem;
