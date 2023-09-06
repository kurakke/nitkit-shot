import {  useEffect, useRef, useState } from 'react';

export const useIntersection = <T extends HTMLElement>(
  onIntersection?: (isIntersecting: boolean, target: Element) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const callback: IntersectionObserverCallback = ([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      onIntersection?.(entry.isIntersecting, entry.target);
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [onIntersection, setIsIntersecting, options]);

  return {
    isIntersecting,
    ref,
  };
};
