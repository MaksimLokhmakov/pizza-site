import { useContext } from "react";
import { StoresContext } from "../../StoresProvider";
import { IStoresContext } from "../../../interfaces";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { modalRoutes } from "../../../utils/consts/routes";
import { observer } from "mobx-react-lite";
import "./style.scss";

const ModalRouter = observer(() => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  const { pizzaStore } = useContext(StoresContext) as IStoresContext;
  const { pizzas } = pizzaStore;

  return (
    <>
      <TransitionGroup component={null}>
        {state?.backgroundLocation && pizzas.length && (
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={200}
            unmountOnExit
          >
            <Routes location={location}>
              {modalRoutes.map((route) => {
                const { path, Component } = route;

                return <Route key={path} path={path} element={<Component />} />;
              })}
            </Routes>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
});

export default ModalRouter;
