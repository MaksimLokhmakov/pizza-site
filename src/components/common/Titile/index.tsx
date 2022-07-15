import { FC, ReactNode } from "react";
import "./style.scss";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

const Title: FC<TitleProps> = ({ children, className }) => {
  const classes = ["title-default", className].join(" ");

  return <h3 className={classes}>{children}</h3>;
};

export default Title;
