import { PopoverContent } from '@nextui-org/react';
import classNames from 'classnames';
import React from 'react';

interface Props {
  userName: string;
  clearTime: string;
  headShot: string;
  hitRate: string;
  bulletUsed: string;
  damage: string;
  kill: string;
  informationType: string;
}

const RankingDetail: ({
  bulletUsed,
  clearTime,
  damage,
  headShot,
  hitRate,
  informationType,
  kill,
  userName,
}: Props) => JSX.Element = ({
  bulletUsed,
  clearTime,
  damage,
  headShot,
  hitRate,
  informationType,
  kill,
  userName,
}) => {
  const detailStyle = (duo: string, solo: string) => {
    switch (informationType) {
      case 'duo':
        return duo;
      case 'solo':
        return solo;
    }
  };
  return (
    <PopoverContent
      className={classNames(
        `block h-[216px] items-start justify-start rounded-[10px] border border-accent-green bg-main p-[15px] shadow-ranking`,
        `${detailStyle('w-[372px]', 'w-[272px]')}`,
      )}
    >
      <ul className='flex h-full flex-col justify-between font-main text-[15px] text-accent-yellow [&>li]:flex [&>li]:w-full [&>li]:justify-between'>
        <li>
          <p>使用アイテム：</p>
          <p>{userName}</p>
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

export default RankingDetail;
