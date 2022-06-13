import React, { FC } from "react";
import SortMenu from "../../components/SortMenu";

interface ShopI {}

const Shop: FC<ShopI> = () => {
  return (
    <div>
      <SortMenu />
    </div>
  );
};

export default Shop;
