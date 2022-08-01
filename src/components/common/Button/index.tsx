import { memo, ReactNode, forwardRef } from "react";
import classes from "../../../utils/classes";
import "./style.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  buttonType?: "submit" | "button" | "reset" | undefined;
  dataSelected?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, onClick, className, disabled, buttonType, dataSelected },
    ref
  ) => {
    const handleClick = () => {
      onClick && onClick();
    };

    const classNames = classes(["button-default", className]);

    return (
      <button
        ref={ref}
        onClick={handleClick}
        data-selected={dataSelected}
        className={classNames}
        disabled={disabled}
        type={buttonType}
      >
        {children}
      </button>
    );
  }
);

export default memo(Button);
