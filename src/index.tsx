import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App/index";
import reportWebVitals from "./reportWebVitals";
import PizzaStore from "./stores/PizzaStore";
import SelectionStore from "./stores/SelectionStore";

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
