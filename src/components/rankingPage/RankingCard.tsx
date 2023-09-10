import { Button } from '@nextui-org/react';
import Image from 'next/image';

import information from '../../../public/information.svg';

interface Props {
  name: string;
  ranking: string;
  score: string;
}

const RankingCard: ({ name, ranking, score }: Props) => JSX.Element = ({
  name,
  ranking,
  score,
}) => {
  return (
    <div className='shadow-ranking flex w-full items-center rounded-[18px] border border-main bg-accent-green p-[2px] font-main text-[15px]'>
      <div className='flex h-full w-[8.24%] items-center justify-center rounded-[15px] bg-main text-light'>
        {ranking}
      </div>
      <p className='ml-[15px] h-[full] w-[62.6%] truncate whitespace-pre px-[5px] text-main'>
        {name}
      </p>
      <Button className='mr-[10px] h-fit w-fit min-w-0 bg-accent-green px-0'>
        <Image src={information} alt='information' width={24} height={24} />
      </Button>
      <div className='ronuded-[15px] ml-auto flex h-full w-[22%] items-center justify-end rounded-[15px] bg-main p-[5px] text-light'>
        {score}
      </div>
    </div>
  );
};

export default RankingCard;
