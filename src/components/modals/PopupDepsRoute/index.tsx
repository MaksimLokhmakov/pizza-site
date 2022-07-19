import { ReactNode, FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "../Popup";

interface PopupDepsRouteProps {
  children: ReactNode;
  className: string;
}

const PopupDepsRoute: FC<PopupDepsRouteProps> = ({ children, className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { backgroundLocation?: Location };

  const handleClose = () => navigate(-1);

  return (
    <Popup isOpened={Boolean(state?.backgroundLocation)} onClose={handleClose}>
      <div className={className}>{children}</div>
    </Popup>
  );
};

export default PopupDepsRoute;
