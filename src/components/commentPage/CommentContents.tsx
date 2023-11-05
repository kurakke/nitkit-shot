import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import bubbleArrowLeft from '../../../public/bubbleArrowLeft.svg';
import bubbleArrowRight from '../../../public/bubbleArrowRight.svg';
import { Comment } from '../../../types/Comment';
import ScrollRevealOnce from '../animation/ui/ScrollRevealOnce';

interface Props {
  affiliation: string;
  comments: Comment[];
}

const CommentContents: ({ affiliation, comments }: Props) => JSX.Element = ({
  //   affiliation,
  comments,
}) => {
  const cardStyle = (place: string, right: string, left: string) => {
    switch (place) {
      case 'right':
        return right;
      case 'left':
        return left;
    }
  };

  return (
    <div>
      {/* <p className='mb-[20px] text-center font-main text-[16px] text-white'>~{affiliation}~</p> */}
      <div className='m-0 grid w-[calc(100vw-30px)] gap-y-[20px] md:gap-y-[24px]'>
        {comments.map((comment, index) => (
          <ScrollRevealOnce>
            <div
              key={index}
              className={classNames(
                `relative w-fit max-w-full rounded-[10px] px-[12px] py-[10px] font-main text-main shadow-regular md:rounded-[12px] md:px-[14px] md:py-[12px]`,
                `${cardStyle(
                  comment.place,
                  'ml-auto mr-[14px] max-w-[85%] break-words bg-accent-green md:mr-[44px]',
                  'ml-[14px] mr-auto max-w-[85%] break-words bg-accent-yellow md:ml-[44px]',
                )}`,
              )}
            >
              {comment.place === 'left' && (
                <Image
                  src={bubbleArrowLeft}
                  width={18}
                  height={16}
                  alt='bubbleArrowLeft'
                  className='absolute left-[-14px] top-0'
                />
              )}
              {comment.place === 'right' && (
                <Image
                  src={bubbleArrowRight}
                  width={18}
                  height={16}
                  alt='bubbleArrowLeft'
                  className='absolute right-[-14px] top-0'
                />
              )}
              <div className='flex items-baseline'>
                <p className='mb-[10px] w-fit border-b border-main text-[15px] leading-tight md:text-[18px]'>
                  {comment.name}
                </p>
                <p className='ml-[10px] text-[12px] leading-[1.44] md:text-[15px]'>
                  Post = [ {comment.post} ];
                </p>
              </div>
              <p className='whitespace-pre-wrap break-words text-[12px]  md:text-[15px]'>
                {comment.comment}
              </p>
            </div>
          </ScrollRevealOnce>
        ))}
      </div>
    </div>
  );
};

export default CommentContents;
