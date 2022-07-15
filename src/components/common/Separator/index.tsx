import { FC } from "react";
import "./style.scss";

interface SeparatorProps {
  className: string;
}

const Separator: FC<SeparatorProps> = ({ className }) => {
  const classes = ["separator", className].join(" ");

  return <div className={classes} />;
};

export default Separator;
