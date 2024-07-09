import { SCROLL_TYPE } from "./../constants/app";
import { useEffect, useState } from "react";

export type ScrollType = typeof SCROLL_TYPE[keyof typeof SCROLL_TYPE];

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollType>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? SCROLL_TYPE.DOWN : SCROLL_TYPE.UP;
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
