import { useRef, useCallback } from "react";

export default function useDebounce(
  callback: (...args: any[]) => void,
  delay: number
) {
  const timer = useRef<NodeJS.Timeout>();

  const debounceCallback = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debounceCallback;
}
