import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "../interfaces/IRoute";

export default function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  const navigateTo = (route: Routes) => {
    if (currentRoute === route) return;

    navigate(route);
  };

  return { currentRoute, navigateTo };
}
