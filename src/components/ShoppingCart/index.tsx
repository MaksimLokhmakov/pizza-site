import { FC, ReactNode } from "react";
import Portal from "../Portal";
import Overlay from "../Overlay";
import classes from "../../styles/popup.module.scss";

interface SideBarModalProps {
  children: ReactNode;
  isOpened: boolean;
  onClose: () => void;
}

const SideBarModal: FC<SideBarModalProps> = ({
  children,
  onClose,
  isOpened,
}) => {
  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className="sidebar-wrapper">
        <Overlay onClick={onClose}>
          <div className={classes.sidebar}>{children}</div>
        </Overlay>
      </div>
    </Portal>
  );
};

export default SideBarModal;
