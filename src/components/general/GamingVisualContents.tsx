import Image from 'next/image';
import React from 'react';

import { GamingVisual } from '../../../types/GamingVisual';

const GamingVisualContents: ({ description, source, title, type }: GamingVisual) => JSX.Element = ({
  description,
  source,
  title,
  type,
}) => {
  return (
    <div className='flex w-[320px] flex-col items-center gap-y-[10px]'>
      {type === 'picture' && (
        <div className='relative h-[180px] w-[320px] md:my-[24px] md:scale-125 xl:my-[48px] xl:scale-150'>
          <Image src={source} alt={title} fill />
        </div>
      )}
      {type === 'video' && (
        <iframe
          src={source}
          width={320}
          height={180}
          allow='fullscreen'
          className=' rounded-[4px] shadow-thin md:my-[24px] md:scale-125 xl:my-[48px] xl:scale-150'
        />
      )}
      <div className='text-[20px] font-bold text-accent-green md:text-[24px]'>{title}</div>
      <p className='whitespace-pre font-main text-[16px] text-light md:text-[18px]'>
        {description}
      </p>
    </div>
  );
};

export default GamingVisualContents;
