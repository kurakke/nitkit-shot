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
        <meta property="og:site_name" content="nit-kit-shot" />
        <meta property="og:title" content="nit-kit-shot" />
        <meta property="og:image" content="https://nitkit-shot-hudcprzz7-kurakke.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fogp.bbd8b4da.png&w=3840&q=75" color="#5bbad5" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitkit-shot.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="nit-kit-shot" />
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
