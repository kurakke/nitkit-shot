import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import Footer from '@/components/Footer';

const RootPage: NextPage = () => {
  return (
    <>
      <div className='bg-base-secondary'>kurakke</div>
      <div className='text-[30px] font-main'>Text Preview</div>
      <div className='text-[30px] font-menu-english'>Text Preview</div>
      <div className='text-[30px] font-menu-japanese'>Text Preview</div>
      <div className='text-[30px] font-ranking'>Text Preview</div>
      <div className='text-[30px] font-sub'>Text Preview</div>
      <div className='text-[30px] font-title'>Text Preview</div>
      <Image src="/logo.png" width={80} height={600} alt="Logo" />
      <Footer />
    </>
  );
};
export default RootPage;
