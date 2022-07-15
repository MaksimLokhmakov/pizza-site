import { FC, memo, ReactNode } from "react";
import "./style.scss";

export enum ButtonTheme {
  OUTLINE_LIGHT = "outline-light",
  OUTLINE_GRAY = "outline-gray",
  COLLORING_LIGHT = "colloring-light",
  COLLORING_GRAY = "colloring-gray",
  COLLORING_DARK = "colloring-dark",
  COLLORING_LIGHT_DEEP = "colloring-light-deep",
}

export enum ButtonShape {
  CIRCLE = "circle",
}

interface ButtonProps {
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  shape?: ButtonShape;
  active?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  theme,
  shape,
  active,
  className,
  onClick,
}) => {
  const handleClick = () => onClick && onClick();

  const classes = [
    "button",
    className,
    theme,
    shape,
    active ? "active" : "",
  ].join(" ");

  return (
    <button onClick={handleClick} className={classes}>
      {children}
    </button>
  );
};

export default memo(Button);
