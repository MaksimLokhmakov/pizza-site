import { memo } from "react";
import { IIngredient } from "../../interfaces/IPizza";
import ucFirst from "../../utils/ucFirst";
import IngredientItem from "../IngredientItem";
import "./style.scss";

type IngredientsListProps = {
  ingredients: IIngredient[];
  isEditable?: boolean;
};

const IngredientsList = ({
  ingredients,
  isEditable = false,
}: IngredientsListProps) => {
  return (
    <>
      {ingredients.map((ingredient, index) => {
        const key = index;
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
            />
            {!isLast && ", "}
          </>
        );
      })}
    </>
  );
};

export default memo(IngredientsList);
