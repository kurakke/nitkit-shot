import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../../../public/logo.svg';

export const Footer = (): JSX.Element => {
  return (
    <div className='relative z-30 m-[15px] mt-[60px] flex h-[48px] w-auto justify-between rounded-[5px] bg-main py-[2px] pl-[15px] pr-[5px]'>
      <Link
        className='transition-opacity tap-highlight-transparent hover:opacity-80 active:opacity-disabled '
        href='/'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/';
        }}
      >
        <Image src={logo} alt={'Logo'} width={120} height={39} />
      </Link>
      <div className='mb-[3px] mt-auto text-[10px] text-white'>©︎ 2023 NitKit 4I.</div>
    </div>
  );
};
