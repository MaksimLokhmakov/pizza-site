import IPizzaIngredient from "../../interfaces/IPizzaIngredient";
import deleteIcon from "../../assets/icons/delete.svg";
import returnIcon from "../../assets/icons/return.svg";
import "./style.scss";
import { useState } from "react";

type IngredientItemProps = {
  ingredient: IPizzaIngredient;
  isEditable?: boolean;
  isDelisted?: boolean;
  onClick?: (ingredient: IPizzaIngredient) => void;
};

const IngredientItem = ({
  ingredient,
  isEditable,
  isDelisted,
  onClick,
}: IngredientItemProps) => {
  const { name, required } = ingredient;
  const currentIcon = isDelisted ? returnIcon : deleteIcon;
  const currentStyle = isDelisted ? "unactive" : "active";

  const handleClick = () => {
    onClick && onClick(ingredient);
  };

  if (!isEditable || required) {
    return <>{name}</>;
  }

  return (
    <button
      className={["ingredient-button", currentStyle].join(" ")}
      onClick={handleClick}
    >
      {name}
      <img src={currentIcon} alt="delete" className="ingredient-icon" />
    </button>
  );
};

export default IngredientItem;
