import { Button } from '@nextui-org/react';
import Link from 'next/link';

import ArrowShape from './ArrowShape';

interface Props {
  path: string;
  waitingTime: number;
}

export const ReservationButton: ({ path, waitingTime }: Props) => JSX.Element = ({
  path,
  waitingTime,
}) => {
  return (
    <>
      <div className='relative mt-[24px] md:mt-[50px] md:scale-125'>
        <Button className='h-[108px] w-[330px] bg-main  shadow-button'>
          <Link className='flex h-full w-full items-center justify-center' href={`/${path}`}>
            <div className='leading-none text-accent-yellow'>
              <p className='font-sub text-[24px] font-semibold'>予約はこちらから</p>
              <p className='mt-[6px] border-b border-accent-yellow font-menu-japanese text-[12px]'>
                予約用LINEbotの友達追加を行います
              </p>
            </div>
            <div className='absolute right-[26px] scale-125'>
              <ArrowShape direction='right' color='bg-accent-yellow' />
            </div>
          </Link>
        </Button>
        <div className='absolute right-[-24px] top-[-36px] flex h-[75px] w-[75px] flex-col items-center justify-center space-y-[-10px] rounded-full border-3 border-accent-yellow bg-white p-0 pb-[5px] font-sub font-bold text-accent-yellow'>
          <div className='text-[36px]'>{waitingTime}</div>
          <div className='text-[12px]'>分待ち</div>
        </div>
      </div>
    </>
  );
};
