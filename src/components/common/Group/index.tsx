import { FC, ReactNode } from "react";
import classes from "../../../utils/classes";
import "./style.scss";

interface GroupProps {
  children: ReactNode;
  className?: string;
  vertical?: boolean;
}

const Group: FC<GroupProps> = ({ children, className, vertical }) => {
  const classNames = classes(["group-default", className, { vertical }]);

  return <div className={classNames}>{children}</div>;
};

export default Group;
