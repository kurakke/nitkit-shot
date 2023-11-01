import Image from 'next/image';
import React from 'react';

import favicon from '../../../public/favicon.png';
import logo from '../../../public/logo.svg';

export const Footer = (): JSX.Element => {
  return (
    <div className='relative z-30 m-[15px] mt-[60px] flex h-[48px] w-auto justify-between rounded-[5px] bg-main pl-[15px] pr-[5px]'>
      <Image src={logo} alt={'Logo'} height={44} width={120} />
      <Image src={favicon} alt={'Favicon'} height={44} width={44} />
      <div className='mb-[5px] mt-auto text-[10px] text-white'>©︎ 2023 NitKit 4I.</div>
    </div>
  );
};
