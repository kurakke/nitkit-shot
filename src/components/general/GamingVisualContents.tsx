import Image from 'next/image';
import React from 'react';

import { GamingVisualProps } from '../../../types/GamingVisual';

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
      <p className='font-main text-light text-[16px]'>{description}</p>
    </div>
  );
};

export default GamingVisualContents;
