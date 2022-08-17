import { FC, useContext } from "react";
import { StoresContext } from "../../../../StoresProvider";
import { Title, Image, Separator, Button } from "../../../../common";
import IngredientsChanges from "../IngredientsChanges";
import SCLIFooter from "../Footer/index";
import { IPizza, IStoresContext } from "../../../../../interfaces";
import editIcon from "../../../../../assets/icons/editIcon.svg";
import plusIcon from "../../../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";
import "./style.scss";
import IShoppingCartProduct from "../../../../../interfaces/IShoppingCartProduct";

interface ShoppingCartListItemProps {
  product: IShoppingCartProduct;
}

const ShoppingCartListItem: FC<ShoppingCartListItemProps> = ({ product }) => {
  const { pizzaStore, shoppingCartStore } = useContext(
    StoresContext
  ) as IStoresContext;
  const { id, name, variants, addons, ingredients } = product.product;

  const selectedVariant = variants[0];
  const { image, size, dough } = selectedVariant;

  const defaultPizzaIngredients = (
    JSON.parse(localStorage.getItem(id) as string) as IPizza
  ).ingredients;
  const delistedIngredients = defaultPizzaIngredients.filter((ingredient) => {
    const stringIngredients = JSON.stringify(ingredients);
    const stringIngredient = JSON.stringify(ingredient);

    return !stringIngredients.includes(stringIngredient);
  });
  const delistedIngredientsNames = delistedIngredients.map(
    (ingredient) => ingredient.name
  );

  const addonsNames = addons.map((addon) => addon.name);

  const handleClickDeleteButton = () => {
    localStorage.removeItem(product.product.id);
    shoppingCartStore.removeProduct(product);
  };
  const textSize = () => {
    switch (size) {
      case 25:
        return "Маленькая";
      case 30:
        return "Средняя";
      case 35:
        return "Большая";
    }
  };

  return (
    <article className="shoppingcart-item df">
      <main className="df">
        <Image src={image} alt="img" className="item-img" />

        <div className="shoppingcart-item-description">
          <div className="df">
            <Title className="description-title">{name}</Title>

            <Button className="title-button">
              <Image
                src={editIcon}
                alt="editIcon"
                className="sign-img title-button-edit-ico"
              />
            </Button>
            <Button className="title-button" onClick={handleClickDeleteButton}>
              <Image
                src={plusIcon}
                alt="deleteIcon"
                className="sign-img title-button-delete-ico"
              />
            </Button>
          </div>

          <p>
            {textSize()} {size} см, {dough} тесто
          </p>

          <IngredientsChanges ingredients={addonsNames} added={true} />
          <IngredientsChanges ingredients={delistedIngredientsNames} />
        </div>
      </main>

      <Separator className="item-separator" />

      <SCLIFooter product={product} />
    </article>
  );
};

export default ShoppingCartListItem;
