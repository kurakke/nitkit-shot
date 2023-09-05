import React from 'react';

import { LayoutProps } from '../../../types/LayoutProps';

import Footer from './Footer';
import { HeaderBar } from './HeaderBar';
import { ScrollToTopButton } from './ScrollToTopButton';

export const DefaultLayout: ({ children }: LayoutProps) => JSX.Element = ({ children }) => {
  return (
    <>
      <HeaderBar />
      <main className='mt-[110px] w-full h-[calc(100%-78px)]'>
        <ScrollToTopButton />
        {children}
      </main>
      <Footer />
    </>
  );
};
