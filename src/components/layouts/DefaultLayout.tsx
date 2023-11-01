import Head from 'next/head';
import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { HeaderBar } from './HeadBar';
import { ScrollToTopButton } from './ScrollToTopButton';

interface Props {
  children: ReactNode;
  metaDescription: string;
  url: string;
  topPage: boolean;
}

export const DefaultLayout: ({ children, metaDescription }: Props) => JSX.Element = ({
  children,
  metaDescription,
  topPage,
  url
}) => {
  return (
    <>
      <Head>
        <meta name="twitter:summary" content="sasasasasa" />
        <meta property="og:url" content={url} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:type' content={topPage ? 'website' : 'article'} />
        <meta name='theme-color' content='004a2e' />
        <meta name='description' content={metaDescription} />
        <title>nit-kit-shot</title>
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
