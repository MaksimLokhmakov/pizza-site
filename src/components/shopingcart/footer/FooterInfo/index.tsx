import { FC } from "react";
import classes from "../../../../utils/classes";
import "./style.scss";

interface FooterInfoProps {
  rightText: string | number;
  leftText: string | number;
  textClassName?: string;
}

const FooterInfo: FC<FooterInfoProps> = ({
  rightText,
  leftText,
  textClassName,
}) => {
  const textClasses = classes([textClassName]);

  return (
    <div className="info">
      <span className={textClasses}>{rightText}</span>
      <span className={textClasses}>{leftText}</span>
    </div>
  );
};

export default FooterInfo;
