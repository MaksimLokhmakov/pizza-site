import { FC } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ProductInfo } from "..";
import { authRoutes, publicRoutes } from "../../utils/consts/routes";
import Popup from "../Popup";
import classes from "../../styles/popup.module.scss";

const AppRouter: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { backgroundLocation?: Location };

  const isAuth: boolean = true;

  const productInfoPopup = (
    <Popup
      isOpened={Boolean(state?.backgroundLocation)}
      onClose={() => navigate(-1)}
    >
      <div className={classes.popup}>
        <ProductInfo />
      </div>
    </Popup>
  );

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        {publicRoutes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
        {isAuth &&
          authRoutes.map((route) => {
            return <Route key={route.path} {...route} />;
          })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/product=:id" element={productInfoPopup} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
