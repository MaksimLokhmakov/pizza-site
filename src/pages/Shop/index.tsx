import React, { FC } from "react";
import SortMenu from "../../components/SortMenu";

interface ShopI {}

const Shop: FC<ShopI> = () => {
  return (
    <div className="shop" >
      <SortMenu />
    </div>
  );
};

export default Shop;
