import Image from 'next/image';
import React from 'react';

import { Sentence } from '../../../types/Sentence';

import SentenceGenerater from './SentenceGenerater';

interface Props {
  description: Sentence;
  image: string;
  title: string;
  type: 'video' | 'picture';
}

const ImageContentsGenerater: ({ description, image, title, type }: Props) => JSX.Element = ({
  description,
  image,
  title,
  type,
}) => {
  return (
    <div className='flex w-[320px] flex-col items-center gap-y-[10px]'>
      {type === 'picture' && (
        <div className='relative h-[180px] w-[320px]'>
          <Image src={image} alt={title} fill />
        </div>
      )}
      {type === 'video' && <video src={image} controls className='h-[180px] w-full' />}
      <div className='text-[20px] font-bold text-accent-green'>{title}</div>
      <div className='mr-auto'>
        <SentenceGenerater sentence={description} textSize='text-[16px]' point={false} />
      </div>
    </div>
  );
};

export default ImageContentsGenerater;
