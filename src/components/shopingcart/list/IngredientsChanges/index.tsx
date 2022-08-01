import { FC } from "react";
import { Image } from "../../../common";
import minusIcon from "../../../../assets/icons/remove_FILL0_wght400_GRAD0_opsz48.svg";
import plusIcon from "../../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";
import "./style.scss";

interface IngredientsChangesProps {
  added?: boolean;
  ingredients: string[];
}

const IngredientsChanges: FC<IngredientsChangesProps> = ({
  ingredients,
  added = false,
}) => {
  const image = added ? plusIcon : minusIcon;
  const alt = added ? "added" : "delisted";

  if (!ingredients.length) {
    return null;
  }

  return (
    <p className="ingredients-chenges">
      <i className="sign">
        <Image src={image} alt={alt} className="sign-img" />
      </i>

      {ingredients.map((ingredient, index) => {
        if (index === ingredients.length - 1) return ingredient;

        return ingredient + ", ";
      })}
    </p>
  );
};

export default IngredientsChanges;
