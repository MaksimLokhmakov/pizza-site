import { FC } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  authRoutes,
  modalRoutes,
  publicRoutes,
} from "../../utils/consts/routes";

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
          {modalRoutes.map((route) => {
            return <Route key={route.path} {...route} />;
          })}
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
