import Head from 'next/head';
import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { HeaderBar } from './HeadBar';
import { ScrollToTopButton } from './ScrollToTopButton';

interface Props {
  children: ReactNode;
  metaDescription: string;
}

export const DefaultLayout: ({ children, metaDescription }: Props) => JSX.Element = ({
  children,
  metaDescription,
}) => {
  return (
    <>
      <Head>
        <meta name='theme-color' content='004a2e' />
        <meta name='description' content={metaDescription} />
        <title>nit-kit-shot</title>
      </Head>
      <div className='inline-block h-full w-full min-w-max bg-base'>
        <HeaderBar />
        <main className='mt-[110px] h-full min-h-screen w-full px-[15px]'>
          {children}
          <ScrollToTopButton />
        </main>
        <Footer />
      </div>
    </>
  );
};
