import { useNavigate } from "react-router-dom";
import Portal from "../Portal";

type ShoppingCartProps = {
  isOpened: boolean;
};

const ShoppingCartModal = ({ isOpened }: ShoppingCartProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return <Portal>ShoppingCartSideBar</Portal>;
};

export default ShoppingCartModal;
