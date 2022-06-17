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
  theme: ButtonTheme;
  shape?: ButtonShape;
  active?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  theme,
  shape,
  active,
  onClick,
}) => {
  const handleClick = () => onClick && onClick();

  return (
    <button
      onClick={handleClick}
      className={["button", theme, shape, active ? "active" : ""].join(" ")}
    >
      {children}
    </button>
  );
};

export default memo(Button);
