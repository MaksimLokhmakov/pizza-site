import { useEffect, useRef, RefObject, useState } from "react";

export default function useScroll(
  parantRef: HTMLElement,
  childRef: RefObject<HTMLElement>,
  callback?: () => void
) {
  const observer = useRef<IntersectionObserver>();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: parantRef,
      rootMargin: "0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log("isIntersecting");
        callback && callback();
        setIsIntersecting(true);
        return;
      }

      setIsIntersecting(false);
    }, options);

    observer.current.observe(childRef.current as Element);

    // return () => {
    //   observer.current?.unobserve(childRef.current as Element);
    // };

    // eslint-disable-next-line
  }, [callback]);

  return { isIntersecting };
}
