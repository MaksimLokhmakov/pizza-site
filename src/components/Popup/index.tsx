import { FC, ReactNode } from "react";
import { useAnimatedValues } from "../../hooks";
import Portal from "../Portal";
import Overlay from "../Overlay";
import "./style.scss";

interface PopupProps {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
}

const Popup: FC<PopupProps> = ({ children, onClose, isOpened }) => {
  const startAnimationPoint = {
    opacity: 0,
    scale: 1.05,
  };
  const endAnimationPoint = {
    opacity: 1,
    scale: 1,
  };

  const { animated, handleCloseAfterAnimation, duration } = useAnimatedValues(
    startAnimationPoint,
    endAnimationPoint,
    onClose,
    200
  );

  const wrapperAnimationStyle = {
    opacity: animated.opacity,
    transitionDuration: duration + "ms",
  };
  const contentAnimationStyle = {
    transform: `scale(${animated.scale})`,
    transitionDuration: duration + "ms",
  };

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className="popup df" role="dialog" style={wrapperAnimationStyle}>
        <Overlay onClick={handleCloseAfterAnimation}>
          {
            <div className="df pa bcfff" style={contentAnimationStyle}>
              {children}
            </div>
          }
        </Overlay>
      </div>
    </Portal>
  );
};

export default Popup;
