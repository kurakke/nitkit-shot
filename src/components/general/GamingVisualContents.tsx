import Image from 'next/image';
import React from 'react';

import { Sentence } from '../../../types/Sentence';

import SentenceGenerater from './SentenceGenerater';

interface Props {
  description: Sentence;
  source: string;
  title: string;
  type: 'video' | 'picture';
}

const GamingVisualContents: ({ description, source, title, type }: Props) => JSX.Element = ({
  description,
  source,
  title,
  type,
}) => {
  return (
    <div className='flex w-[320px] flex-col items-center gap-y-[10px]'>
      <div className='relative h-[180px] w-[320px]'>
        {type === 'picture' && <Image src={source} alt={title} fill />}
        {type === 'video' && (
          <iframe
            src='https://www.youtube.com/embed/C32HCq4lUl4?si=IUTF3k7Z_pwMqLYW'
            title='video'
            allowFullScreen
          />
        )}
      </div>
      <div className='text-[20px] font-bold text-accent-green'>{title}</div>
      <div className='mr-auto'>
        <SentenceGenerater sentence={description} textSize='text-[16px]' point={false} />
      </div>
    </div>
  );
};

export default GamingVisualContents;
