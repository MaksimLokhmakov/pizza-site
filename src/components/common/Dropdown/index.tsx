import { FC, ReactNode, useState, useEffect } from "react";
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

  const classes = ["dropdown-default", className].join(" ");

  if (!visible) {
    return null;
  }

  return (
    <div style={{ opacity: opacity }} className={classes}>
      {children}
    </div>
  );
};

export default Dropdown;
