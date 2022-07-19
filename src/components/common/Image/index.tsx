import { FC, memo } from "react";
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
  const classes = [className, "image-default"].join(" ");

  return (
    <img
      src={src}
      alt={alt}
      onClick={handleClick}
      className={classes}
      width={width}
      height={height}
    />
  );
};

export default memo(Image);
