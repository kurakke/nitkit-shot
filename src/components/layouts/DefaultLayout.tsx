import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { HeaderBar } from './HeadBar';
import { ScrollToTopButton } from './ScrollToTopButton';

interface Props {
  children: ReactNode;
}

export const DefaultLayout: ({ children }: Props) => JSX.Element = ({ children }) => {
  return (
    <div className='inline-block h-full w-full min-w-max bg-base'>
      <HeaderBar />
      <main className='mt-[110px] h-full min-h-screen w-full px-[15px]'>
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
};
