import { PopoverContent } from '@nextui-org/react';
import React from 'react';

import { SoloRankingInformation } from '../../../types/Ranking';

interface Props {
  information: SoloRankingInformation;
}

const SoloRankingDetail: ({ information }: Props) => JSX.Element = ({
  information: { bulletUsed, clearTime, damage, headShot, hitRate, itemName, kill },
}) => {
  return (
    <PopoverContent className='block h-[216px] w-[272px] items-start justify-start rounded-[10px] border border-accent-green bg-main p-[15px] shadow-ranking'>
      <ul className='flex h-full flex-col justify-between font-main text-[15px] text-accent-yellow [&>li]:flex [&>li]:w-full [&>li]:justify-between'>
        <li>
          <p>使用アイテム：</p>
          <p>{itemName}</p>
        </li>
        <li>
          <p>クリア時間：</p>
          <p>{clearTime}</p>
        </li>
        <li>
          <p>ヘッドショット率：</p>
          <p>{headShot}</p>
        </li>
        <li>
          <p>命中率：</p>
          <p>{hitRate}</p>
        </li>
        <li>
          <p>使用弾数：</p>
          <p>{bulletUsed}</p>
        </li>
        <li>
          <p>被弾数：</p>
          <p>{damage}</p>
        </li>
        <li>
          <p>撃破数：</p>
          <p>{kill}</p>
        </li>
      </ul>
    </PopoverContent>
  );
};

export default SoloRankingDetail;
