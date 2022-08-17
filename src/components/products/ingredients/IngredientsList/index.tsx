import { memo } from "react";
import IPizzaIngredient from "../../../../interfaces/IPizzaIngredient";
import ucFirst from "../../../../utils/ucFirst";
import IngredientItem from "../IngredientItem";
import "./style.scss";

type IngredientsListProps = {
  ingredients: IPizzaIngredient[];
  formedIngredients?: IPizzaIngredient[];
  isEditable?: boolean;
  onClickIngredient?: (currentIngredient: IPizzaIngredient) => void;
};

const IngredientsList = ({
  ingredients,
  formedIngredients = [],
  isEditable = false,
  onClickIngredient,
}: IngredientsListProps) => {
  return (
    <>
      {ingredients.map((ingredient, index) => {
        const key = ingredient.id;
        const isFirst = index === 0;
        const isLast = index === ingredients.length - 1;
        const isIngredientDelisted = !formedIngredients.find(
          (current) => current.id === ingredient.id
        );

        const currentIngredient = { ...ingredient };
        currentIngredient.name = isFirst
          ? currentIngredient.name
          : currentIngredient.name.toLowerCase();

        return (
          <>
            <IngredientItem
              key={key}
              ingredient={currentIngredient}
              aditable={isEditable}
              delisted={isIngredientDelisted}
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
