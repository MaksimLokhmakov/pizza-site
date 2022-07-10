import { useEffect, useState } from "react";

export default function useAnimatedValues(
  startPoint: any,
  endPoint: any,
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

  return { animated, handleCloseAfterAnimation };
}
