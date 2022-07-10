import { ReactNode, FC } from "react";
import { useAnimatedValues } from "../../hooks";
import { animationDuration } from "../../utils/consts/consts";
import "./style.scss";

interface OverlayProps {
  children: ReactNode;
  onClick: () => void;
}

const Overlay: FC<OverlayProps> = ({ children, onClick }) => {
  const startAnimationPoint = 0;
  const endAnimationPoint = 1;

  const { animated, handleCloseAfterAnimation } = useAnimatedValues(
    startAnimationPoint,
    endAnimationPoint,
    onClick,
    animationDuration
  );

  const animationStyle = {
    opacity: animated,
    transitionDuration: animationDuration + "ms",
  };

  return (
    <>
      <div
        className="overlay"
        onClick={handleCloseAfterAnimation}
        style={animationStyle}
      />
      {children}
    </>
  );
};

export default Overlay;
