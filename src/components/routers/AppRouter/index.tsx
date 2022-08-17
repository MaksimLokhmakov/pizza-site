import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../../utils/consts/routes";
import ModalRouter from "../ModalRouter";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  const isAuth: boolean = true;

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        {publicRoutes.map((route) => {
          const { path, Component } = route;

          return <Route key={path} path={path} element={<Component />} />;
        })}

        {isAuth &&
          authRoutes.map((route) => {
            const { path, Component } = route;

            return <Route key={path} path={path} element={<Component />} />;
          })}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ModalRouter />
    </>
  );
});

export default AppRouter;
