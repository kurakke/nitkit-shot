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
      {type === 'video' && <iframe src={source} width={320} height={180} allow="fullscreen" />}
      <div className='text-[20px] font-bold text-accent-green'>{title}</div>
      <p className='font-main text-light text-[16px] whitespace-pre'>{description}</p>
    </div>
  );
};

export default GamingVisualContents;
