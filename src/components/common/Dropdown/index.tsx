import { FC, ReactNode, useState, useEffect } from "react";
import classes from "../../../utils/classes";
import "./style.scss";

interface DropdownProps {
  children: ReactNode;
  visible: boolean;
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({ children, visible, className }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  const classNames = classes(["dropdown-default", className]);

  if (!visible) {
    return null;
  }

  return (
    <div style={{ opacity: opacity }} className={classNames}>
      {children}
    </div>
  );
};

export default Dropdown;
