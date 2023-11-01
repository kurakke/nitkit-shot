import Head from 'next/head';
import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { HeaderBar } from './HeadBar';
import { ScrollToTopButton } from './ScrollToTopButton';

interface Props {
  children: ReactNode;
  metaDescription: string;
  isTopPage: boolean;
}

export const DefaultLayout: ({ children, isTopPage, metaDescription }: Props) => JSX.Element = ({
  children,
  isTopPage,
  metaDescription,
}) => {
  return (
    <>
      <Head>
        <title>nit-kit-shot</title>
        <meta name='description' content={metaDescription} />
        <meta property="og:type" content={isTopPage ? "website" : "article"} />
      </Head>
      <div className='inline-block h-full w-full min-w-max bg-base'>
        <HeaderBar />
        <main className='mt-[110px] h-full min-h-[calc(100vh_-_233px)] w-full px-[15px]'>
          {children}
          <ScrollToTopButton />
        </main>
        <Footer />
      </div>
    </>
  );
};
