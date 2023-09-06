import { useCallback, useState } from 'react';

import { useIntersection } from './useIntersection';

export const useIntersectionOnce = <T extends HTMLElement>(
  onIntersected?: (isIntersecting: boolean, target: Element) => void,
  options?: IntersectionObserverInit,
) => {
  const [isIntersected, setIsIntersected] = useState<boolean>(false);

  const handleIntersection = useCallback(
    (isIntersecting: boolean, target: Element) => {
      if (isIntersecting && !isIntersected) {
        setIsIntersected(true);
        onIntersected?.(isIntersecting, target);
      }
    },
    [isIntersected, setIsIntersected, onIntersected],
  );

  const { ref } = useIntersection<T>(handleIntersection, options);

  return {
    isIntersected,
    ref,
  };
};
