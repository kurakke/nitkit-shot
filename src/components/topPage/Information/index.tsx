import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { TitleText } from '../../general/TitleText';
const Information = (): JSX.Element => {
  type InformationText = {
    id: number;
    date: string;
    text: string;
  };
  const INFORMATION_TEXT: InformationText[] = [
    {
      date: '2021/10/10',
      id: 1,
      text: 'kurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakke',
    },
    {
      date: '2021/10/10',
      id: 2,
      text: 'kurakke',
    },
    {
      date: '2021/10/10',
      id: 3,
      text: 'kurakke',
    },
    {
      date: '2021/10/10',
      id: 4,
      text: 'kurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakke',
    },
  ];
  return (
    <>
      <div className='flex flex-col items-center'>
        <TitleText title='information' />
        <ul className='mt-[10px] flex h-[150px] w-[380px] flex-col items-center overflow-y-scroll rounded-[10px] border-[1px] border-accent-yellow px-[15px] py-[10px]'>
          {INFORMATION_TEXT.map((text) => (
            <li className='flex w-full whitespace-pre text-sm' key={text.id}>
              <p className='font-main text-accent-yellow'>{text.date}</p>
              <p className='ml-[5px] w-[280px] whitespace-pre-wrap break-words font-sub text-white'>
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
