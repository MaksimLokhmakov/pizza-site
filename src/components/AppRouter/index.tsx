import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes } from "../../routes/authRoutes";
import { publicRoutes } from "../../routes/publicRoutes";

const AppRouter: FC = () => {
  const isAuth: boolean = true;

  return (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
      {isAuth &&
        authRoutes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
