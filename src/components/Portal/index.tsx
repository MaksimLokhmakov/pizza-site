import { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: FC<PortalProps> = ({ children }) => {
  const [conteiner] = useState(() => document.createElement("div"));
  const modalsConteiner = document.getElementById("modals");
  const body = document.querySelector("body");

  useEffect(() => {
    modalsConteiner?.appendChild(conteiner);
    body?.classList.add("oh");

    return () => {
      modalsConteiner?.removeChild(conteiner);
      body?.classList.remove("oh");
    };
    // eslint-disable-next-line
  }, []);

  return ReactDOM.createPortal(children, conteiner);
};

export default Portal;
