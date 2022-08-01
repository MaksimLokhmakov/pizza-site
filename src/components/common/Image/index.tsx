import { FC, memo } from "react";
import classes from "../../../utils/classes";
import "./style.scss";

interface ImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
}

const Image: FC<ImageProps> = ({
  src,
  alt,
  onClick,
  className,
  width,
  height,
}) => {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  const handleClick = () => {
    onClick && onClick();
  };
  const classNames = classes([className, "image-default"]);

  return (
    <img
      src={src}
      alt={alt}
      onClick={handleClick}
      className={classNames}
      width={width}
      height={height}
    />
  );
};

export default memo(Image);
