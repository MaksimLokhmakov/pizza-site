import { FC, memo, ReactNode } from "react";
import "./style.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  buttonType?: "submit" | "button" | "reset" | undefined;
  dataSelected?: boolean;
  href?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  buttonType,
  dataSelected,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  const classes = ["button-default", className].join(" ");

  return (
    <button
      onClick={handleClick}
      data-selected={dataSelected}
      className={classes}
      disabled={disabled}
      type={buttonType}
    >
      {children}
    </button>
  );
};

export default memo(Button);
