import React from 'react';

import { Credit } from '../../../types/Credit';

import CreditContents from './CreditContents';

const CREDITS_MOCK: Credit = {
  1: {
    id: 1,
    name: 'Name',
    post: 'Post',
  },
  2: {
    id: 2,
    name: 'Name',
    post: 'Post',
  },
  3: {
    id: 3,
    name: 'Name',
    post: 'Post',
  },
  4: {
    id: 4,
    name: 'Name',
    post: 'Post',
  },
  5: {
    id: 5,
    name: 'Name',
    post: 'Post',
  },
  6: {
    id: 6,
    name: 'Name',
    post: 'Post',
  },
  7: {
    id: 7,
    name: 'Name',
    post: 'Post',
  },
};

const Credit = (): JSX.Element => {
  return (
    <div className='mt-[20px] font-main text-light'>
      <div className='flex flex-col items-center gap-y-[30px]'>
        <CreditContents affiliation='ソフトウェア班' credit={CREDITS_MOCK} />
        <CreditContents affiliation='ハードウェア班' credit={CREDITS_MOCK} />
        <CreditContents affiliation='ゲーム班' credit={CREDITS_MOCK} />
        <CreditContents affiliation='＋α班' credit={CREDITS_MOCK} />
      </div>
    </div>
  );
};

export default Credit;
