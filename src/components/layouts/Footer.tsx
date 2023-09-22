import Image from 'next/image';
import React from 'react';

import logo from '../../../public/logo.svg';

export const Footer = (): JSX.Element => {
  return (
    <div className='relative z-40 flex m-[15px] h-[48px] w-auto justify-between rounded-[5px] bg-main pl-[15px] pr-[10.5px]'>
      <Image src={logo} alt={'Logo'} height={44} width={120} />
      <div className='mb-[5px] mt-auto text-[10px] text-white'>@ 2023 NitKit 4I.</div>
    </div>
  );
};
