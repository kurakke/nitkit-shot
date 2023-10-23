import { Button } from '@nextui-org/react';
import Link from 'next/link';

import ArrowShape from './ArrowShape';

interface Props {
  text: string;
  backGroundColor: string;
  textColor: string;
  path: string;
}

export const RedirectButton: ({ backGroundColor, path, text, textColor }: Props) => JSX.Element = ({
  backGroundColor,
  path,
  text,
  textColor,
}) => {
  return (
    <Button className={`${backGroundColor} h-[54px] w-[230px] p-0`}>
      <Link className='flex h-full w-full items-center justify-center' href={`/${path}`}>
        <div className={`${textColor} leading-none`}>
          <p className='font-sub text-[20px] font-semibold'>{text}</p>
        </div>
        <div className='absolute right-[12px]'>
          <ArrowShape direction='right' color='bg-main' />
        </div>
      </Link>
    </Button>
  );
};
