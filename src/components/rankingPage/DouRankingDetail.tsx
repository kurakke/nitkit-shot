import { PopoverContent } from '@nextui-org/react';
import React from 'react';

import { DuoRankingInformation } from '../../../types/Ranking';

interface Props {
  information: DuoRankingInformation;
}

const DuoRankingDetail: ({ information }: Props) => JSX.Element = ({
  information: { bulletUsed, clearTime, damage, headShot, hitRate, itemName, kill },
}) => {
  return (
    <PopoverContent className='block h-[216px] w-[372px] items-start justify-start rounded-[10px] border border-accent-green bg-main p-[15px] shadow-ranking'>
      <ul className='flex h-full flex-col justify-between font-main text-[15px] text-accent-yellow [&>li]:flex [&>li]:w-full [&>li]:justify-between [&_div]:flex [&_div]:gap-x-[5px]'>
        <li>
          <p>使用アイテム：</p>
          <div>
            <p>{itemName.onePlayer}</p>
            <span>/</span>
            <p>{itemName.twoPlayer}</p>
          </div>
        </li>
        <li>
          <p>クリア時間：</p>
          <p>{clearTime}</p>
        </li>
        <li>
          <p>ヘッドショット率：</p>
          <div>
            <p>{headShot.onePlayer}</p>
            <span>/</span>
            <p>{headShot.twoPlayer}</p>
          </div>
        </li>
        <li>
          <p>命中率：</p>
          <div>
            <p>{hitRate.onePlayer}</p>
            <span>/</span>
            <p>{hitRate.twoPlayer}</p>
          </div>
        </li>
        <li>
          <p>使用弾数：</p>
          <div>
            <p>{bulletUsed.onePlayer}</p>
            <span>/</span>
            <p>{bulletUsed.twoPlayer}</p>
          </div>
        </li>
        <li>
          <p>被弾数：</p>
          <div>
            <p>{damage.onePlayer}</p>
            <span>/</span>
            <p>{damage.twoPlayer}</p>
          </div>
        </li>
        <li>
          <p>撃破数：</p>
          <div>
            <p>{kill.onePlayer}</p>
            <span>/</span>
            <p>{kill.twoPlayer}</p>
          </div>
        </li>
      </ul>
    </PopoverContent>
  );
};

export default DuoRankingDetail;
