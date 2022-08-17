import Portal from "../Portal";
import Overlay from "../Overlay";
import ProductInfo from "../../products/ProductInfo";
import styles from "../../../styles/popup.module.scss";
import classes from "../../../utils/classes";

const ProductInfoModal = () => {
  const classNames = classes([styles.modalWrapper, "df"]);

  return (
    <Portal>
      <div className={classNames}>
        <Overlay>
          <ProductInfo />
        </Overlay>
      </div>
    </Portal>
  );
};

export default ProductInfoModal;
