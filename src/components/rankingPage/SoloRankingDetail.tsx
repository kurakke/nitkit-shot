import { PopoverContent } from '@nextui-org/react';
import React from 'react';

import { SoloRankingInformation } from '../../../types/Ranking';

interface Props {
  information: SoloRankingInformation;
}

type SoloRankingDetailContents = {
  content: string;
  title: string;
}[];

const SoloRankingDetail: ({ information }: Props) => JSX.Element = ({
  information: { bulletUsed, clearTime, damage, headShot, hitRate, itemName, kill },
}) => {
  const RANKING_DETAIL_CONTENTS: SoloRankingDetailContents = [
    {
      content: itemName,
      title: '使用アイテム：',
    },
    {
      content: clearTime,
      title: 'クリア時間：',
    },
    {
      content: headShot,
      title: 'ヘッドショット率：',
    },
    {
      content: hitRate,
      title: '命中率：',
    },
    {
      content: bulletUsed,
      title: '使用弾数：',
    },
    {
      content: damage,
      title: '被弾数：',
    },
    {
      content: kill,
      title: '撃破数：',
    },
  ];

  return (
    <PopoverContent className='block h-[216px] w-[272px] items-start justify-start rounded-[10px] border border-accent-green bg-main p-[15px] shadow-thin'>
      <ul className='flex h-full flex-col justify-between font-main text-[15px] text-accent-yellow [&>li]:flex [&>li]:w-full [&>li]:justify-between'>
        {RANKING_DETAIL_CONTENTS.map(({ content, title }, index) => (
          <li key={index}>
            <p>{title}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </PopoverContent>
  );
};

export default SoloRankingDetail;
