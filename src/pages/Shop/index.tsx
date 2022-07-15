import { SelectionMenu, ProductsList } from "../../components";
import "./style.scss";

const Shop = () => {
  return (
    <>
      <SelectionMenu />
      <main className="shop">
        <ProductsList />
      </main>
    </>
  );
};

export default Shop;
