import Portal from "../Portal";
import Overlay from "../Overlay";
import { ShoppingCart } from "../..";
import styles from "../../../styles/popup.module.scss";

const ShoppingCartModal = () => (
  <Portal>
    <div className={styles.modalWrapper}>
      <Overlay>
        <ShoppingCart />
      </Overlay>
    </div>
  </Portal>
);

export default ShoppingCartModal;
