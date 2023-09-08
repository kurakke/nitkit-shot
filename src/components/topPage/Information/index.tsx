import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { TitleText } from '../../TitleText';
const Information = (): JSX.Element => {
  type InformationText = {
    date: string;
    text: string;
  };
  const INFORMATION_TEXT: InformationText[] = [
    {
      date: '2021/10/10',
      text: 'kurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakke',
    },
    {
      date: '2021/10/10',
      text: 'kurakke',
    },
    {
      date: '2021/10/10',
      text: 'kurakke',
    },
    {
      date: '2021/10/10',
      text: 'kurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakke',
    },
  ];
  return (
    <>
      <div className='flex flex-col items-center'>
        <TitleText title='information' />
        <div className='mt-[10px] flex h-[150px] w-[380px] flex-col items-center overflow-y-scroll rounded-[10px] border-[1px] border-accent-yellow px-[15px] py-[10px]'>
          {INFORMATION_TEXT.map((text) => (
            <div className='flex w-full whitespace-pre text-sm' key={text.date}>
              <p className='font-main text-accent-yellow'>{text.date}</p>
              <p className='ml-[8px] w-[280px] whitespace-pre-wrap break-words font-sub text-white'>
                {text.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
