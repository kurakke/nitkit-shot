// components/ScrollRevealOnce.tsx
import React, { ReactNode } from 'react';

import { useIntersectionOnce } from '../../hooks/useIntersectionOnce';

type ScrollRevealOnceProps = {
  children: ReactNode;
};

const ScrollRevealOnce: React.FC<ScrollRevealOnceProps> = ({ children }) => {
  const { isIntersected, ref } = useIntersectionOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`duration-500 ease-in ${isIntersected ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealOnce;
