import { useEffect, useRef } from "react";

export default function useEffectSkipMount(
  callback: () => void,
  dependencies: any[]
) {
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) {
      return callback();
    }

    isMounted.current = false;
    // eslint-disable-next-line
  }, dependencies);
}
