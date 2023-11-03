/* eslint-disable sort/object-properties */
import React from 'react';

import { GAMING_VISUAL } from '../../../constants/gamingVisual';
import { GUIDELINES_MOCK } from '../../../constants/guidelinesMock';
import GamingVisualContents from '../general/GamingVisualContents';
import SentenceGenerator from '../general/SentenceGenerator';

const ForPlayer = () => {
  return (
    <div className='flex flex-col items-center'>
      <ul className='mt-[20px] grid gap-y-[30px]'>
        {Object.values(GAMING_VISUAL).map((forPlayerContents, index) => (
          <li key={index}>
            <GamingVisualContents {...forPlayerContents} />
          </li>
        ))}
      </ul>
      <div className='ml-[12px] mt-[30px] flex w-[377px] flex-col items-center md:w-full'>
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
