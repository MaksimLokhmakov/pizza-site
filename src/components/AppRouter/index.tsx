import { Routes, Route } from "react-router-dom";
import { authRoutes } from "../../routes/authRoutes";
import { publicRoutes } from "../../routes/publicRoutes";

function index() {
  const isAuth: boolean = false;

  return (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
      {isAuth &&
        authRoutes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
    </Routes>
  );
}

export default index;
