import { IIngredient } from "../../interfaces/IPizza";
import deleteIcon from "../../assets/icons/delete.svg";
import returnIcon from "../../assets/icons/return.svg";
import "./style.scss";
import { useState } from "react";

type IngredientItemProps = {
  ingredient: IIngredient;
  isEditable?: boolean;
};

const IngredientItem = ({ ingredient, isEditable }: IngredientItemProps) => {
  const { name, required } = ingredient;
  const [isActive, setIsActive] = useState(true);
  const currentIcon = isActive ? deleteIcon : returnIcon;
  const currentStyle = isActive ? "active" : "unactive";

  const handleClick = () => {
    setIsActive((prev) => !prev);
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
