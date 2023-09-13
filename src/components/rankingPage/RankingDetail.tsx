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
          {informationType === 'solo' && <p>{userName}</p>}
          {informationType === 'duo' && (
            <div className='flex gap-[5px]'>
              <p>{userName}</p>
              <p>/</p>
              <p>{userName}</p>
            </div>
          )}
        </li>
        <li>
          <p>クリア時間：</p>
          <p>{clearTime}</p>
        </li>
        <li>
          <p>ヘッドショット率：</p>
          {informationType === 'solo' && <p>{headShot}</p>}
          {informationType === 'duo' && (
            <div className='flex gap-[5px]'>
              <p>{headShot}</p>
              <p>/</p>
              <p>{headShot}</p>
            </div>
          )}
        </li>
        <li>
          <p>命中率：</p>
          {informationType === 'solo' && <p>{hitRate}</p>}
          {informationType === 'duo' && (
            <div className='flex gap-[5px]'>
              <p>{hitRate}</p>
              <p>/</p>
              <p>{hitRate}</p>
            </div>
          )}
        </li>
        <li>
          <p>使用弾数：</p>
          {informationType === 'solo' && <p>{bulletUsed}</p>}
          {informationType === 'duo' && (
            <div className='flex gap-[5px]'>
              <p>{bulletUsed}</p>
              <p>/</p>
              <p>{bulletUsed}</p>
            </div>
          )}
        </li>
        <li>
          <p>被弾数：</p>
          {informationType === 'solo' && <p>{damage}</p>}
          {informationType === 'duo' && (
            <div className='flex gap-[5px]'>
              <p>{damage}</p>
              <p>/</p>
              <p>{damage}</p>
            </div>
          )}
        </li>
        <li>
          <p>撃破数：</p>
          {informationType === 'solo' && <p>{kill}</p>}
          {informationType === 'duo' && (
            <div className='flex gap-[5px]'>
              <p>{kill}</p>
              <p>/</p>
              <p>{kill}</p>
            </div>
          )}
        </li>
      </ul>
    </PopoverContent>
  );
};

export default RankingDetail;
