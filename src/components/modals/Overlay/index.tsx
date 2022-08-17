import { ReactNode, FC } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
interface OverlayProps {
  children: ReactNode;
}

const Overlay: FC<OverlayProps> = ({ children }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="overlay" onClick={handleClose} />
      {children}
    </>
  );
};

export default Overlay;
