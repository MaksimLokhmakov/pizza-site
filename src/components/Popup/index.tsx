import { FC, ReactNode } from "react";
import Portal from "../Portal";
import Overlay from "../Overlay";
import "./style.scss";

interface PopupProps {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
}

const Popup: FC<PopupProps> = ({ children, onClose, isOpened }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className="popup df" role="dialog">
        <Overlay onClick={onClose}>{children}</Overlay>
      </div>
    </Portal>
  );
};

export default Popup;
