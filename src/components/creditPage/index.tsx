import React from 'react';

import { CREDIT_MOCK } from '../../../constants/creditMock';

import CreditContents from './CreditContents';

const Credit = (): JSX.Element => {
  return (
    <div className='mt-[20px] font-main text-light'>
      <div className='flex flex-col items-center gap-y-[30px]'>
        <CreditContents affiliation='ソフトウェア班' credit={CREDIT_MOCK} />
        <CreditContents affiliation='ハードウェア班' credit={CREDIT_MOCK} />
        <CreditContents affiliation='ゲーム班' credit={CREDIT_MOCK} />
        <CreditContents affiliation='＋α班' credit={CREDIT_MOCK} />
      </div>
    </div>
  );
};

export default Credit;
