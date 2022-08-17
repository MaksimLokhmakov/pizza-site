import { FC, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: FC<PortalProps> = ({ children }) => {
  const modalsConteiner = document.getElementById("modals") as HTMLDivElement;
  const body = document.body;

  useEffect(() => {
    body?.classList.add("oh");

    return () => {
      body?.classList.remove("oh");
    };
    // eslint-disable-next-line
  }, []);

  return ReactDOM.createPortal(children, modalsConteiner);
};

export default Portal;
