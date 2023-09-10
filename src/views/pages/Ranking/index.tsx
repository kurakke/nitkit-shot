import { type } from 'os';

import { Button } from '@nextui-org/react';
import classNames from 'classnames';
import { NextPage } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';

import information from '../../../../public/information.svg';
import search from '../../../../public/search.svg';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

type RankingContents = {
  name: string;
  ranking: string;
  score: string;
};

const SOLO_RANKING_MOCK: Record<number, RankingContents> = {
  1: {
    name: 'User Name',
    ranking: '1',
    score: '123456789',
  },
  2: {
    name: 'User Name',
    ranking: '2',
    score: '123456789',
  },
  3: {
    name: 'User Name',
    ranking: '3',
    score: '123456789',
  },
  4: {
    name: 'User Name',
    ranking: '4',
    score: '123456789',
  },
  5: {
    name: 'User Name',
    ranking: '5',
    score: '123456789',
  },
  6: {
    name: 'User Name',
    ranking: '6',
    score: '123456789',
  },
  7: {
    name: 'User Name',
    ranking: '7',
    score: '123456789',
  },
  8: {
    name: 'User Name',
    ranking: '8',
    score: '123456789',
  },
  9: {
    name: 'User Name',
    ranking: '9',
    score: '123456789',
  },
  10: {
    name: 'User Name',
    ranking: '10',
    score: '123456789',
  },
  11: {
    name: 'User Name',
    ranking: '11',
    score: '123456789',
  },
  12: {
    name: 'User Name',
    ranking: '12',
    score: '123456789',
  },
  13: {
    name: 'User Name',
    ranking: '13',
    score: '123456789',
  },
  14: {
    name: 'User Name',
    ranking: '14',
    score: '123456789',
  },
  15: {
    name: 'User Name',
    ranking: '15',
    score: '123456789',
  },
  16: {
    name: 'User Name',
    ranking: '16',
    score: '123456789',
  },
  17: {
    name: 'User Name',
    ranking: '17',
    score: '123456789',
  },
  18: {
    name: 'User Name',
    ranking: '18',
    score: '123456789',
  },
  19: {
    name: 'User Name',
    ranking: '19',
    score: '123456789',
  },
  20: {
    name: 'User Name',
    ranking: '20',
    score: '123456789',
  },
  100: {
    name: 'User Name',
    ranking: '100',
    score: '123456789',
  },
  1000: {
    name: 'User Name',
    ranking: '1000',
    score: '1234589',
  },
  1002: {
    name: 'User Nameeeeeeeeeeeeeeeeeeeeee',
    ranking: '1002',
    score: '1234',
  },
};

const DUO_RANKING_MOCK = {
  1: {
    name: 'kurakkekamooooooo',
    ranking: '1',
    score: '123456789',
  },
  2: {
    name: 'User Name',
    ranking: '2',
    score: '123456789',
  },
  3: {
    name: 'User Name',
    ranking: '3',
    score: '123456789',
  },
  4: {
    name: 'User Name',
    ranking: '4',
    score: '123456789',
  },
  5: {
    name: 'User Name',
    ranking: '5',
    score: '123456789',
  },
  6: {
    name: 'User Name',
    ranking: '6',
    score: '123456789',
  },
  7: {
    name: 'User Name',
    ranking: '7',
    score: '123456789',
  },
  8: {
    name: 'User Name',
    ranking: '8',
    score: '123456789',
  },
  9: {
    name: 'User Name',
    ranking: '9',
    score: '123456789',
  },
  10: {
    name: 'User Name',
    ranking: '10',
    score: '123456789',
  },
  11: {
    name: 'User Name',
    ranking: '11',
    score: '123456789',
  },
  12: {
    name: 'User Name',
    ranking: '12',
    score: '123456789',
  },
  13: {
    name: 'User Name',
    ranking: '13',
    score: '123456789',
  },
  14: {
    name: 'User Name',
    ranking: '14',
    score: '123456789',
  },
  15: {
    name: 'User Name',
    ranking: '15',
    score: '123456789',
  },
  16: {
    name: 'User Name',
    ranking: '16',
    score: '123456789',
  },
  17: {
    name: 'User Name',
    ranking: '17',
    score: '123456789',
  },
  18: {
    name: 'User Name',
    ranking: '18',
    score: '123456789',
  },
  19: {
    name: 'User Name',
    ranking: '19',
    score: '123456789',
  },
  20: {
    name: 'User Name',
    ranking: '20',
    score: '123456789',
  },
  100: {
    name: 'User Name',
    ranking: '100',
    score: '123456789',
  },
  1000: {
    name: 'User Name',
    ranking: '1000',
    score: '1234589',
  },
  1002: {
    name: 'User Nameeeeeeeeeeeeeeeeeeeeee',
    ranking: '1002',
    score: '1234',
  },
};

const RankingPage: NextPage = () => {
  const [isCategory, setIsCategory] = useState<string>('solo');
  const [isUserName, setIsUserName] = useState<string>('');

  const personName = document.getElementById('userSearch') as HTMLInputElement;
  const rankingContents = (duo: string, solo: string) => {
    switch (isCategory) {
      case 'solo':
        return solo;
      case 'duo':
        return duo;
    }
  };

  return (
    <DefaultLayout>
      <TitleText title='ranking' />
      <div className='mx-auto mb-[75px] mt-[10px] flex h-[1054px] w-[392px] flex-col'>
        <div className=' z-10 flex flex-grow items-end justify-center font-ranking text-[16px]'>
          <Button
            onClick={() => setIsCategory('solo')}
            className={classNames(
              `flex w-[38.47%] rounded-[10px_10px_0_0] px-0`,
              `${rankingContents(
                'h-[92.1%] bg-accent-yellow text-main',
                'mb-[-2px] h-[calc(100%+5px)] border-[1px] border-b-[2px] border-accent-green border-b-[transparent] bg-main text-accent-green',
              )}`,
            )}
          >
            Solo
          </Button>
          <Button
            onClick={() => setIsCategory('duo')}
            className={classNames(
              `flex w-[38.47%] rounded-[10px_10px_0_0] px-0`,
              `${rankingContents(
                'mb-[-2px] h-[calc(100%+5px)] border-[1px] border-b-[2px] border-accent-green border-b-[transparent] bg-main text-accent-green',
                'h-[92.1%] bg-accent-yellow text-main ',
              )}`,
            )}
          >
            duo
          </Button>
        </div>
        <div className='z-0 flex h-[96.4%] flex-col rounded-[15px] border-[1px] border-accent-green bg-main p-[10px]'>
          <div className='mx-auto h-[28px] w-fit rounded-[13px] border border-accent-green px-[10px] font-ranking text-[16px] text-accent-green'>
            {rankingContents('2 Player Leaders', '1 Player Leaders')}
          </div>
          <div className='shadow-ranking mx-auto mt-[10px] flex h-[38px] w-[301px] items-center rounded-[19px] bg-main p-[5px]'>
            <div className='flex w-full justify-between rounded-[19px] bg-accent-green  py-[3.3px] pl-[10px] pr-[5px]'>
              <input
                id='userSearch'
                type='text'
                placeholder='ユーザーネームで自分の順位を検索…'
                className='w-full bg-accent-green font-sub text-[12px] text-base-secondary'
              />
              <Button
                onClick={() => setIsUserName(personName!.value)}
                className='h-fit w-fit min-w-0 bg-accent-green px-0'
              >
                <Image src={search} alt='search' width={24} height={24} />
              </Button>
            </div>
          </div>
          <ul className='mt-[10px] grid gap-y-[10px] overflow-y-scroll'>
            {Object.values(rankingContents(DUO_RANKING_MOCK, SOLO_RANKING_MOCK)).map(
              (rankingContents) =>
                (!isUserName || rankingContents.name.includes(isUserName)) && (
                  <li
                    key={rankingContents.ranking}
                    className='shadow-ranking flex w-full items-center rounded-[18px] border border-main bg-accent-green p-[2px] font-main text-[15px]'
                  >
                    <div className='flex h-full w-[8.24%] items-center justify-center rounded-[15px] bg-main text-light'>
                      {rankingContents.ranking}
                    </div>
                    <p className='ml-[15px] h-[full] w-[62.6%] truncate whitespace-pre px-[5px] text-main'>
                      {rankingContents.name}
                    </p>
                    <Button className='mr-[10px] h-fit w-fit min-w-0 bg-accent-green px-0'>
                      <Image src={information} alt='information' width={24} height={24} />
                    </Button>
                    <div className='ronuded-[15px] ml-auto flex h-full w-[22%] items-center justify-end rounded-[15px] bg-main p-[5px] text-light'>
                      {rankingContents.score}
                    </div>
                  </li>
                ),
            )}
          </ul>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RankingPage;
