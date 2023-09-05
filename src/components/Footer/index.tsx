import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line import/no-unresolved
import logo from '../../../public/logo.svg';

const Footer = (): JSX.Element => {
  return (
      <div className='m-[15px] bg-main h-[48px] pl-[15px] flex justify-between items-center rounded-[5px] pr-[4px]'>
        <Image src={logo} alt={'Logo'} height={44} width={120} />
        <div className='mt-[25px] text-[10px] text-white'>@ 2023 NitKit 4I.</div>
      </div>
  );
};

export default Footer;
