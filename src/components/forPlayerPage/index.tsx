/* eslint-disable sort/object-properties */
import React from 'react';

import { GAMING_VISUAL } from '../../../constants/gamingVisual';
import { GUIDELINES_MOCK } from '../../../constants/guidelinesMock';
import GamingVisualContents from '../general/GamingVisualContents';
import SentenceGenerator from '../general/SentenceGenerator';

const ForPlayer = () => {
  return (
    <div className='mt-[10px] flex flex-col items-center'>
      <div className='mb-[20px] mt-[10px] border-b border-accent-yellow text-[20px] font-bold text-accent-yellow'>
        チュートリアルと遊び方
      </div>
      <ul className='grid gap-y-[30px]'>
        {Object.values(GAMING_VISUAL).map((forPlayerContents) => (
          <li key={forPlayerContents.id}>
            <GamingVisualContents {...forPlayerContents} />
          </li>
        ))}
      </ul>
      <div className='ml-[12px] mt-[30px] flex w-[377px] flex-col items-center'>
        <div className='mb-[10px] mr-[12px] font-sub text-[20px] font-bold text-accent-yellow'>
          ※注意事項※
        </div>
        <div>
          <SentenceGenerator
            sentence={GUIDELINES_MOCK}
            textSize='text-[13px]'
            leading='leading-[20px]'
            gap='gap-y-[20px]'
            point
          />
        </div>
      </div>
    </div>
  );
};

export default ForPlayer;
