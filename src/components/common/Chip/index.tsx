import { FC, memo, ReactNode } from "react";
import "./style.scss";

type ChipTheme =
  | "outline-light"
  | "outline-gray"
  | "colloring-light"
  | "colloring-gray"
  | "colloring-dark"
  | "colloring-light-deep"
  | "";

type ChipShape = "circle" | "";

interface ChipProps {
  children: ReactNode;
  className?: string;
  theme?: ChipTheme;
  shape?: ChipShape;
}

const Chip: FC<ChipProps> = ({ children, className, theme, shape }) => {
  const classes = ["chip-default", className, theme, shape].join(" ");

  return <div className={classes}>{children}</div>;
};

export default memo(Chip);
