import { Button, Popover, PopoverTrigger } from '@nextui-org/react';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import information from '../../../public/information.svg';

import RankingDetail from './RankingDetail';

interface Props {
  name: string;
  ranking: string;
  score: string;
  cardType: string;
}

const RankingCard: ({ cardType, name, ranking, score }: Props) => JSX.Element = ({
  cardType,
  name,
  ranking,
  score,
}) => {
  const cardStyle = (duo: string, solo: string) => {
    switch (cardType) {
      case 'duo':
        return duo;
      case 'solo':
        return solo;
    }
  };
  return (
    <div
      className={classNames(
        `flex h-[38px] w-[372px] items-center rounded-[18px] border border-main p-[3px] font-main text-[15px] shadow-ranking`,
        `${cardStyle('bg-accent-yellow', 'bg-accent-green')}`,
      )}
    >
      <div className='flex aspect-square h-full items-center justify-center rounded-[15px] bg-main text-light'>
        {ranking}
      </div>
      <div className='ml-[15px] flex w-[55%] whitespace-pre px-[5px] text-main [&>p]:truncate'>
        {cardType === 'solo' && <p>{name}</p>}
        {cardType === 'duo' && (
          <>
            <p className='truncate'>{name}</p>
            <span className='mx-[10px]'>/</span>
            <p className='truncate'>{name}</p>
          </>
        )}
      </div>
      <Popover placement='bottom'>
        <PopoverTrigger>
          <Button className='mr-[10px] h-fit w-fit min-w-0 bg-[transparent] px-0'>
            <Image src={information} alt='information' width={24} height={24} />
          </Button>
        </PopoverTrigger>
        <RankingDetail
          informationType={cardType}
          bulletUsed='1234'
          clearTime='1234'
          damage='1234'
          headShot='1234'
          hitRate='1234'
          kill='1234'
          userName='1234'
        />
      </Popover>
      <div className='ronuded-[15px] ml-auto flex h-full w-[22%] items-center justify-end rounded-[15px] bg-main p-[5px] text-light'>
        {score}
      </div>
    </div>
  );
};

export default RankingCard;
