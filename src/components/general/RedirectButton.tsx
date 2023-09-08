import { Button } from '@nextui-org/react';
import Image from 'next/image';

import allow from '../../../public/allow.svg';

interface Props {
  text: string;
  backGroundColor: string;
  textColor: string;
}

export const RedirectButton: ({ backGroundColor, text, textColor }: Props) => JSX.Element = ({
  backGroundColor,
  text,
  textColor,
}) => {
  return (
    <Button className={`${backGroundColor} relative flex h-[54px] w-[230px] p-0`}>
      <div className={`${textColor} leading-none`}>
        <div className='font-sub text-[20px] font-semibold'>{text}</div>
      </div>
      <Image
        className='absolute right-0 rotate-90'
        src={allow}
        alt={'allow'}
        width={36}
        height={36}
      />
    </Button>
  );
};
