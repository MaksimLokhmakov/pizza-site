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
  children?: ReactNode;
  style?: object;
  className?: string;
  theme?: ChipTheme;
  shape?: ChipShape;
  ariaHidden?: boolean;
}

const Chip: FC<ChipProps> = ({
  children,
  className,
  theme,
  shape,
  style,
  ariaHidden,
}) => {
  const classes = ["chip-default", className, theme, shape].join(" ");

  return (
    <div style={style} className={classes} aria-hidden={ariaHidden}>
      {children}
    </div>
  );
};

export default memo(Chip);
