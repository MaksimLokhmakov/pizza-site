import { FC, ReactNode } from "react";
import "./style.scss";

interface GroupProps {
  children: ReactNode;
  className?: string;
  vertical?: boolean;
}

const Group: FC<GroupProps> = ({ children, className, vertical }) => {
  const classes = [
    "group-default",
    className,
    vertical && "group-vertical",
  ].join(" ");

  return <div className={classes}>{children}</div>;
};

export default Group;
