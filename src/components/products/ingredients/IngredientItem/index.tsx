import Button from "../../../common/Button";
import classes from "../../../../utils/classes";
import IPizzaIngredient from "../../../../interfaces/IPizzaIngredient";
import deleteIcon from "../../../../assets/icons/delete.svg";
import returnIcon from "../../../../assets/icons/return.svg";
import Image from "../../../common/Image";
import "./style.scss";

type IngredientItemProps = {
  ingredient: IPizzaIngredient;
  aditable?: boolean;
  delisted?: boolean;
  onClick?: (ingredient: IPizzaIngredient) => void;
};

const IngredientItem = ({
  ingredient,
  aditable,
  delisted,
  onClick,
}: IngredientItemProps) => {
  const { name, required } = ingredient;
  const currentIcon = delisted ? returnIcon : deleteIcon;
  const classNames = classes([
    "ingredient-button",
    { delisted },
    !delisted && "aditable",
  ]);

  const handleClick = () => {
    onClick && onClick(ingredient);
  };

  if (!aditable || required) {
    return <>{name}</>;
  }

  return (
    <Button className={classNames} onClick={handleClick}>
      {name}
      <Image src={currentIcon} alt="delete" className="ingredient-icon" />
    </Button>
  );
};

export default IngredientItem;
