import { memo } from "react";
import IPizzaIngredient from "../../interfaces/IPizzaIngredient";
import ucFirst from "../../utils/ucFirst";
import IngredientItem from "../IngredientItem";
import "./style.scss";

type IngredientsListProps = {
  ingredients: IPizzaIngredient[];
  isEditable?: boolean;
  onClickIngredient?: (currentIngredient: IPizzaIngredient) => void;
};

const IngredientsList = ({
  ingredients,
  isEditable = false,
  onClickIngredient,
}: IngredientsListProps) => {
  return (
    <>
      {ingredients.map((ingredient, index) => {
        const key = ingredient.id;
        const isFirst = index === 0;
        const isLast = index === ingredients.length - 1;
        let currentIngredient = { ...ingredient };

        if (isFirst) {
          currentIngredient.name = ucFirst(currentIngredient.name);
        }

        return (
          <>
            <IngredientItem
              key={key}
              ingredient={currentIngredient}
              isEditable={isEditable}
              onClick={onClickIngredient}
            />
            {!isLast && ", "}
          </>
        );
      })}
    </>
  );
};

export default memo(IngredientsList);
