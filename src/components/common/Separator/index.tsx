import { FC } from "react";
import classes from "../../../utils/classes";
import "./style.scss";

interface SeparatorProps {
  vertical?: boolean;
  className?: string;
}

const Separator: FC<SeparatorProps> = ({ className, vertical }) => {
  const classNames = classes([
    "separator-default",
    className,
    vertical && "separator-vertical",
  ]);

  return <div className={classNames} />;
};

export default Separator;
