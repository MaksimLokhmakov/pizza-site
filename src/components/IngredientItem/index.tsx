import IPizzaIngredient from "../../interfaces/IPizzaIngredient";
import deleteIcon from "../../assets/icons/delete.svg";
import returnIcon from "../../assets/icons/return.svg";
import Button from "../common/Button";
import Image from "../common/Image";
import "./style.scss";

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
    <Button
      className={["ingredient-button", currentStyle].join(" ")}
      onClick={handleClick}
    >
      {name}
      <Image src={currentIcon} alt="delete" className="ingredient-icon" />
    </Button>
  );
};

export default IngredientItem;
