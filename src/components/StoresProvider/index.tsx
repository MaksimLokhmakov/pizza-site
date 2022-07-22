import { createContext, FC, ReactNode } from "react";
import { PizzaStore, SelectionStore } from "../../stores";
import { IStoresContext } from "../../interfaces";

export const StoresContext = createContext<IStoresContext | null>(null);

interface StoresProviderProps {
  children: ReactNode;
}

const StoresProvider: FC<StoresProviderProps> = ({ children }) => {
  const contextValue = {
    pizzaStore: new PizzaStore(),
    selectionStore: new SelectionStore(),
  };

  return (
    <StoresContext.Provider value={contextValue}>
      {children}
    </StoresContext.Provider>
  );
};

export default StoresProvider;
