import React from 'react';

import { INFORMATION_DATA } from '../../../../constants/informationData';
import { TitleText } from '../../general/TitleText';

const Information = (): JSX.Element => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <TitleText title='information' />
        <ul className='mt-[10px] flex h-[150px] w-[380px] flex-col items-center gap-y-[10px] overflow-y-scroll rounded-[10px] border-[1px] border-accent-yellow px-[15px] py-[10px] md:w-[520px]'>
          {INFORMATION_DATA.map((text) => (
            <li className='flex w-full text-sm' key={text.id}>
              <p className='font-main text-accent-yellow'>{text.date}</p>
              <p className='ml-[5px] w-[280px] whitespace-pre-wrap font-sub text-white'>
                {text.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Information;
