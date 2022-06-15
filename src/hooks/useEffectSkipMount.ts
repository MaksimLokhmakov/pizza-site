import { useEffect, useRef } from "react";

export default function useEffectSkipMount(
  callback: () => void,
  dependencies: []
) {
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) {
      return callback();
    }

    isMounted.current = false;
  }, dependencies);
}
