import { useEffect, useRef } from "react";

export default function useEffectSkipMount(
  callback: () => void,
  dependencies: any[]
) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      callback();
    }

    isMounted.current = true;
    // eslint-disable-next-line
  }, dependencies);
}
