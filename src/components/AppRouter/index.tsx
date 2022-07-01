import { FC } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ProductInfoModal, ShoppingCart } from "..";
import { authRoutes, publicRoutes } from "../../utils/consts/routes";

// * temp
import pizzaImg from "../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";

const AppRouter: FC = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  const isAuth: boolean = true;

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
          <Route
            path="/product/:id"
            element={
              <ProductInfoModal isOpened={Boolean(state?.backgroundLocation)} />
            }
          />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
