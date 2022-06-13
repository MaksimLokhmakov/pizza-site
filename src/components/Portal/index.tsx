import React, { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface IPortal {
  children: ReactNode;
}

const Portal: FC<IPortal> = ({ children }) => {
  const [conteiner] = useState(() => document.createElement("div"));
  const modalsConteiner = document.getElementById("modals");

  useEffect(() => {
    modalsConteiner?.appendChild(conteiner);

    return () => {
      modalsConteiner?.removeChild(conteiner);
    };
  }, []);

  return ReactDOM.createPortal(children, conteiner);
};

export default Portal;
