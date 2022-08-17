import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Portal from "../Portal";
import "./style.scss";

interface PopupProps {
  children: ReactNode;
  isOpened?: boolean;
}

const Popup: FC<PopupProps> = ({ children, isOpened }) => {
  const navigation = useNavigate();

  const onClose = () => {
    navigation(-1);
  };

  return (
    <Portal>
      <div>
        <div className="popup df" role="dialog">
          {/* <Overlay onClick={onClose}>{children}</Overlay> */}
        </div>
      </div>
    </Portal>
  );
};

export default Popup;
