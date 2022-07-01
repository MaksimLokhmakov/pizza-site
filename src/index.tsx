import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App/index";
import reportWebVitals from "./reportWebVitals";
import PizzaStore, { IPizzaStore } from "./stores/PizzaStore";
import SelectionStore, { ISelectionStore } from "./stores/SelectionStore";

export interface IContext {
  pizzaStore: IPizzaStore;
  selectionStore: ISelectionStore;
}

export const Context = createContext<any>(null);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        selectionStore: new SelectionStore(),
        pizzaStore: new PizzaStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
