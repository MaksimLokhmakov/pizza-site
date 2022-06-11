import React, { FC, ReactNode } from "react";
import "./style.scss";

export enum ButtonTheme {
  OUTLINE_LIGHT = "outline-light",
  OUTLINE_GRAY = "outline-gray",
  COLLORING_LIGHT = "colloring-light",
  COLLORING_GRAY = "colloring-gray",
  COLLORING_DARK = "colloring-dark",
}

interface ButtonProps {
  children: ReactNode;
  theme: ButtonTheme;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, theme, onClick }) => {
  return <button className={["button", theme].join(" ")}>{children}</button>;
};

export default Button;
