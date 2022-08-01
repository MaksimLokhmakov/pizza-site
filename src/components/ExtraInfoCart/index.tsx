import { FC } from "react";
import { Image, Title } from "../common";
import classes from "../../utils/classes";
import "./style.scss";

interface ExtraInfoCartProps {
  image: string;
  title: string;
  secondaryText?: string;
  className?: string;
}

const ExtraInfoCart: FC<ExtraInfoCartProps> = ({
  image,
  title,
  secondaryText,
  className,
}) => {
  const cartClasses = classes(["extra-info-cart", className]);

  return (
    <article className={cartClasses}>
      <Image src={image} alt={title} className="extra-info-cart-img" />
      <div className="extra-info-cart-content">
        <Title className="extra-info-cart-title">{title}</Title>

        {secondaryText && (
          <span className="extra-info-cart-secondary">{secondaryText}</span>
        )}
      </div>
    </article>
  );
};

export default ExtraInfoCart;
