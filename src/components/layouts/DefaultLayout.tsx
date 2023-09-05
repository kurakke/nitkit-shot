import React from 'react';

import { LayoutProps } from '../../../types/LayoutProps';

import { Footer } from './Footer';
import { HeaderBar } from './HeadBar';
import { ScrollToTopButton } from './ScrollToTopButton';

export const DefaultLayout: ({ children }: LayoutProps) => JSX.Element = ({ children }) => {
  return (
    <div className='inline-block h-full w-full bg-base'>
      <HeaderBar />
      <main className='mt-[110px] h-full w-full'>
        <ScrollToTopButton />
        {children}
      </main>
      <Footer />
    </div>
  );
};
