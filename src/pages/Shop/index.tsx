import { SortMenu, ProductsList } from "../../components";
import "./style.scss";

const Shop = () => {
  return (
    <>
      <SortMenu />
      <main className="shop">
        <ProductsList />
      </main>
    </>
  );
};

export default Shop;
