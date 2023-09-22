import Image from 'next/image';
import React from 'react';

import { GamingVisualProps } from '../../../types/GamingVisual';

import SentenceGenerator from './SentenceGenerator';

const GamingVisualContents: (Props: Omit<GamingVisualProps, 'id'>) => JSX.Element = ({
  description,
  source,
  title,
  type,
}) => {
  return (
    <div className='flex w-[320px] flex-col items-center gap-y-[10px]'>
      {type === 'picture' && (
        <div className='relative h-[180px] w-[320px]'>
          <Image src={source} alt={title} fill />
        </div>
      )}
      {type === 'video' && <video src={source} controls className='h-[180px] w-full' />}
      <div className='text-[20px] font-bold text-accent-green'>{title}</div>
      <div className='mr-auto'>
        <SentenceGenerator sentence={description} textSize='text-[16px]' point={false} />
      </div>
    </div>
  );
};

export default GamingVisualContents;