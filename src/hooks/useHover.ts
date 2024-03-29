import { useEffect, useState } from "react";

export default function useHover(ref: { current: HTMLElement | null }) {
  const [isHovering, setIsHovering] = useState(false);

  const on = () => {
    setIsHovering(true);
  };

  const off = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;
    node.addEventListener("mouseenter", on);
    node.addEventListener("mousemove", on);
    node.addEventListener("mouseleave", off);

    return () => {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mousemove", on);
      node.removeEventListener("mouseleave", off);
    };
    // eslint-disable-next-line
  }, []);

  return isHovering;
}
