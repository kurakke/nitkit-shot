import Head from 'next/head';
import Image from 'next/image';
import React, { ReactNode } from 'react';

import ogp from '../../../public/ogp.png';

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
        <meta name='description' content={metaDescription} />
      </Head>
      <div className='inline-block h-full w-full min-w-max bg-base'>
        <HeaderBar />
        <Image src={ogp} alt={'ogp'} width={0} height={0} />
        <main className='mt-[110px] h-full min-h-[calc(100vh_-_233px)] w-full px-[15px]'>
          {children}
          <ScrollToTopButton />
        </main>
        <Footer />
      </div>
    </>
  );
};
