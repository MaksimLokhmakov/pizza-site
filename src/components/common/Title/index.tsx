import { FC, ReactNode, memo } from "react";
import classes from "../../../utils/classes";
import "./style.scss";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

const Title: FC<TitleProps> = ({ children, className }) => {
  const classNames = classes(["title-default", className]);

  return <h3 className={classNames}>{children}</h3>;
};

export default memo(Title);
