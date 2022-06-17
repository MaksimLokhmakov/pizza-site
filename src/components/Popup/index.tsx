import { FC, ReactNode } from "react";
import Portal from "../Portal";
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
        <div className={"popup__overlay"} role="button" onClick={onClose} />
        <div className="popup__content">{children}</div>
      </div>
    </Portal>
  );
};

export default Popup;
