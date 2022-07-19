import { useEffect, useState } from "react";

export default function useAnimatedValues(
  startPoint: any,
  endPoint: any,
  duration: number,
  closingFunction?: () => void
) {
  const [animated, setAnimated] = useState(startPoint);

  useEffect(() => {
    setAnimated(endPoint);
  }, [endPoint]);

  const handleCloseAfterAnimation = () => {
    setAnimated(startPoint);

    setTimeout(() => {
      closingFunction && closingFunction();
    }, duration);
  };

  return { animated, handleCloseAfterAnimation };
}
