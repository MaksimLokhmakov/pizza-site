import { ReactNode, FC } from "react";
import "./style.scss";
interface OverlayProps {
  children: ReactNode;
  onClick: () => void;
  visible?: boolean;
}

const Overlay: FC<OverlayProps> = ({ children, onClick }) => {
  return (
    <>
      <div className="overlay" onClick={onClick} />
      {children}
    </>
  );
};

export default Overlay;
