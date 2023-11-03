import { PopoverContent } from '@nextui-org/react';
import React from 'react';

import { DuoRankingInformation } from '../../../types/Ranking';

interface Props {
  information: DuoRankingInformation;
}

type DuoRankingDetailContents = {
  content: Record<string, string> | string;
  title: string;
}[];

const DuoRankingDetail: ({ information }: Props) => JSX.Element = ({
  information: { bulletUsed, clearTime, damage, headShot, hitRate, itemName, kill },
}) => {
  const RANKING_DETAIL_CONTENTS: DuoRankingDetailContents = [
    {
      content: {
        onePlayer: itemName.onePlayer,
        twoPlayer: itemName.twoPlayer,
      },
      title: '使用アイテム：',
    },
    {
      content: {
        onePlayer: headShot.onePlayer,
        twoPlayer: headShot.twoPlayer,
      },
      title: 'ヘッドショット率：',
    },
    {
      content: {
        onePlayer: hitRate.onePlayer,
        twoPlayer: hitRate.twoPlayer,
      },
      title: '命中率：',
    },
    {
      content: {
        onePlayer: bulletUsed.onePlayer,
        twoPlayer: bulletUsed.twoPlayer,
      },
      title: '使用弾数：',
    },
    {
      content: {
        onePlayer: damage.onePlayer,
        twoPlayer: damage.twoPlayer,
      },
      title: '被弾数：',
    },
    {
      content: {
        onePlayer: kill.onePlayer,
        twoPlayer: kill.twoPlayer,
      },
      title: '撃破数：',
    },
  ];

  return (
    <PopoverContent className='block h-[216px] w-[372px] items-start justify-start rounded-[10px] border border-accent-green bg-main p-[15px] shadow-thin'>
      <ul className='flex h-full flex-col justify-between font-main text-[15px] text-accent-yellow [&>li]:flex [&>li]:w-full [&>li]:justify-between [&_div]:flex [&_div]:gap-x-[5px]'>
        {RANKING_DETAIL_CONTENTS.map(({ content, title }, index) => (
          <li key={index}>
            <p>{title}</p>
            <div className='flex gap-x-[5px]'>
              {content !== clearTime && (
                <>
                  <p>{(content as Record<string, string>).onePlayer}</p>
                  <span>/</span>
                  <p>{(content as Record<string, string>).twoPlayer}</p>
                </>
              )}
              {content === clearTime && <p>{content}</p>}
            </div>
          </li>
        ))}
      </ul>
    </PopoverContent>
  );
};

export default DuoRankingDetail;
