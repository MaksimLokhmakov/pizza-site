import React, { FC, ReactNode } from "react";
import "./style.scss";

interface ButtonProps {
  children: ReactNode;
  theme: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, theme, onClick }) => {
  return <button className={["button", theme].join(" ")}>{children}</button>;
};

export default Button;
