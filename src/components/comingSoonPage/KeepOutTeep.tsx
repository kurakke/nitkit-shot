import React from 'react';

interface Props {
  rotate: string;
}

const KeepOutTeep: ({ rotate }: Props) => JSX.Element = ({ rotate }) => {
  return (
    <div
      className={`flex justify-center gap-x-[40px] h-[22px] whitespace-pre bg-accent-yellow ${rotate}`}
    >
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
      <div className='font-ranking text-[16px]'>keep out</div>
    </div>
  );
};

export default KeepOutTeep;
