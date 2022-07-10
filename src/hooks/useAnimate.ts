import { useEffect, useState } from "react";

export default function useAnimate(
  startPoint: object,
  endPoint: object,
  closingFunction: () => void,
  duration: number
) {
  const [animated, setAnimated] = useState(startPoint);

  useEffect(() => {
    setAnimated(endPoint);
  }, []);

  const handleCloseAfterAnimation = () => {
    setAnimated(startPoint);

    setTimeout(() => {
      closingFunction();
    }, duration);
  };

  return { animated, handleCloseAfterAnimation, duration };
}
