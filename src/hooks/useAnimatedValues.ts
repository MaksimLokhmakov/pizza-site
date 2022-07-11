import { useEffect, useState } from "react";
import useEffectSkipMount from "./useEffectSkipMount";

export default function useAnimatedValues(
  startPoint: any,
  endPoint: any,
  duration: number,
  closingFunction?: () => void
) {
  const [animated, setAnimated] = useState(startPoint);

  useEffect(() => {
    setAnimated(endPoint);
  }, []);

  useEffectSkipMount(() => {
    setAnimated(startPoint);
  }, [animated]);

  const handleCloseAfterAnimation = () => {
    setAnimated(startPoint);

    setTimeout(() => {
      closingFunction && closingFunction();
    }, duration);
  };

  return { animated, handleCloseAfterAnimation };
}
