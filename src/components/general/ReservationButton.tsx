import { Button } from '@nextui-org/react';
import Link from 'next/link';

import ArrowShape from './ArrowShape';

interface Props {
  text: string;
  subText: string;
  backGroundColor: string;
  textColor: string;
  path: string;
  waitTime: string;
}

export const ReservationButton: ({
  backGroundColor,
  path,
  subText,
  text,
  textColor,
  waitTime,
}: Props) => JSX.Element = ({ backGroundColor, path, subText, text, textColor, waitTime }) => {
  return (
    <>
      <div className=''>{waitTime}</div>
      <Button className={`${backGroundColor} h-[108px] w-[330px] p-0`}>
        <Link className='flex h-full w-full items-center justify-center' href={`/${path}`}>
          <div className={`${textColor} leading-none`}>
            <p className='font-sub text-[24px] font-semibold'>{text}</p>
            <p className='mt-[2px] border-b border-accent-yellow font-sub text-[12px]'>{subText}</p>
          </div>
          <div className='absolute right-[12px] [&>div]:bg-accent-yellow'>
            <ArrowShape direction='right' />
          </div>
        </Link>
      </Button>
    </>
  );
};
