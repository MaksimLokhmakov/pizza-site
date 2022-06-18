import { useCallback, useState } from "react";
import ProductCard from "./ProductCard";
import ProductInfoModal from "./ProductInfoModal";

const Product = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const openModal = useCallback(() => {
    setIsPopupOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsPopupOpened(false);
  }, []);

  return (
    <>
      <ProductCard onClick={openModal} />
      <ProductInfoModal
        isOpened={isPopupOpened}
        onClose={closeModal}
        product={{
          id: "0bc9a360-77b7-4675-a03e-506e3e3445a8",
          type: "мясная",
          name: "Маргарита",
          dough: "традиционное",
          minWeight: 430,
          size: 25,
          price: 17.9,
        }}
      />
    </>
  );
};

export default Product;
