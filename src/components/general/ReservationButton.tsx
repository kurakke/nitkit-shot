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
      <div className='relative mt-[6px]'>
        <Button className={`${backGroundColor} h-[108px] w-[330px] p-0`}>
          <Link className='flex h-full w-full items-center justify-center' href={`/${path}`}>
            <div className={`${textColor} leading-none`}>
              <p className='font-sub text-[24px] font-semibold'>{text}</p>
              <p className='mt-[2px] border-b border-accent-yellow font-sub text-[12px]'>
                {subText}
              </p>
            </div>
            <div className='absolute right-[26px] scale-125'>
              <ArrowShape direction='right' color='bg-accent-yellow' />
            </div>
          </Link>
        </Button>
        <div className='absolute right-[-24px] top-[-12px] flex h-[75px] w-[75px] flex-col items-center justify-center space-y-[-10px] rounded-full border-3 border-accent-yellow bg-white p-0 pb-[5px] font-sub font-bold text-accent-yellow'>
          <div className='text-[36px]'>{waitTime}</div>
          <div className='text-[12px]'>分待ち</div>
        </div>
      </div>
    </>
  );
};
