import { Button, Popover, PopoverTrigger } from '@nextui-org/react';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import information from '../../../public/information.svg';
import {
  DuoRankingInformation,
  DuoRankingProps,
  SoloRankingInformation,
  SoloRankingProps,
} from '../../../types/Ranking';

import DuoRankingDetail from './DouRankingDetail';
import DuoRankingName from './DuoRankingName';
import SoloRankingDetail from './SoloRankingDetail';
import SoloRankingName from './SoloRankingName';

interface Props {
  informations: SoloRankingProps | DuoRankingProps;
  cardType: string;
}

const RankingCard: ({ cardType, informations }: Props) => JSX.Element = ({
  cardType,
  informations,
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
        {informations.ranking}
      </div>
      <div className='ml-[15px] flex w-[55%] whitespace-pre px-[5px] text-main [&>p]:truncate'>
        {cardType === 'solo' && (
          <SoloRankingName playerName={informations.playerName as SoloRankingProps['playerName']} />
        )}
        {cardType === 'duo' && (
          <DuoRankingName playerName={informations.playerName as DuoRankingProps['playerName']} />
        )}
      </div>
      <Popover placement='bottom'>
        <PopoverTrigger>
          <Button className='mr-[10px] h-fit w-fit min-w-0 bg-[transparent] px-0'>
            <Image src={information} alt='information' width={24} height={24} />
          </Button>
        </PopoverTrigger>
        {cardType === 'solo' && (
          <SoloRankingDetail information={informations.information as SoloRankingInformation} />
        )}
        {cardType === 'duo' && (
          <DuoRankingDetail information={informations.information as DuoRankingInformation} />
        )}
      </Popover>
      <div className='ronuded-[15px] ml-auto flex h-full w-[22%] items-center justify-end rounded-[15px] bg-main p-[5px] text-light'>
        {informations.score}
      </div>
    </div>
  );
};

export default RankingCard;
