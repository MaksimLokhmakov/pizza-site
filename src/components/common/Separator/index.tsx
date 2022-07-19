import { FC } from "react";
import "./style.scss";

interface SeparatorProps {
  vertical?: boolean;
  className?: string;
}

const Separator: FC<SeparatorProps> = ({ className, vertical }) => {
  const classes = [
    "separator-default",
    className,
    vertical && "separator-vertical",
  ].join(" ");

  return <div className={classes} />;
};

export default Separator;
