import React, { FC, ReactNode } from "react";
import "./style.scss";

export enum ButtonTheme {
  OUTLINE_LIGHT = "outline-light",
  OUTLINE_GRAY = "outline-gray",
  COLLORING_LIGHT = "colloring-light",
  COLLORING_GRAY = "colloring-gray",
  COLLORING_DARK = "colloring-dark",
}

export enum ButtonShape {
  CIRCLE = "circle",
}

interface ButtonProps {
  children: ReactNode;
  theme: ButtonTheme;
  shape?: ButtonShape;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, theme, shape, onClick }) => {
  const handleClick = () => onClick();

  return (
    <button
      onClick={handleClick}
      className={["button", theme, shape].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
