import { throttle } from 'lodash';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import search from '../../../public/search.svg';

import RankingCard from './RankingCard';
import RankingTab from './RankingTab';

interface RankingProps {
  name: string;
  ranking: string;
  score: string;
}

type Ranking = Record<string, RankingProps>;

const SOLO_RANKING_MOCK: Ranking = {
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

const DUO_RANKING_MOCK: Ranking = {
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

export const Ranking = (): JSX.Element => {
  const [isSelectedTab, setIsSelectedTab] = useState<'solo' | 'duo'>('solo');
  const [isSearchUser, setIsSearchUser] = useState<string>('');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const userSearch = throttle(() => {
        const searchUser = document.getElementById('userSearch') as HTMLInputElement;
        if (isSearchUser !== searchUser.value) {
          setIsSearchUser(searchUser.value);
        }
      }, 400);
      window.addEventListener('input', userSearch);
      return () => window.removeEventListener('input', userSearch);
    }
  }, [isSearchUser]);

  const setRankingTitle = (duo: string, solo: string) => {
    switch (isSelectedTab) {
      case 'solo':
        return solo;
      case 'duo':
        return duo;
    }
  };

  const setRankingData = (duo: Ranking, solo: Ranking) => {
    switch (isSelectedTab) {
      case 'solo':
        return solo;
      case 'duo':
        return duo;
    }
  };

  return (
    <div className='mx-auto mb-[75px] mt-[10px] flex h-[1054px] w-[392px] flex-col'>
      <div className='z-10 flex flex-grow items-end justify-center font-ranking text-[16px]'>
        <RankingTab
          onClick={() => setIsSelectedTab('solo')}
          tabName='solo'
          selectedTab={isSelectedTab}
        />
        <RankingTab
          onClick={() => setIsSelectedTab('duo')}
          tabName='duo'
          selectedTab={isSelectedTab}
        />
      </div>
      <div className='z-0 flex h-[96.4%] flex-col rounded-[15px] border-[1px] border-accent-green bg-main p-[10px]'>
        <div className='mx-auto h-[28px] w-fit rounded-[13px] border border-accent-green px-[10px] font-ranking text-[16px] text-accent-green'>
          {setRankingTitle('2 Player Leaders', '1 Player Leaders')}
        </div>
        <div className='shadow-ranking mx-auto mt-[10px] flex h-[38px] w-[301px] items-center rounded-[19px] bg-main p-[5px]'>
          <div className='flex w-full justify-between rounded-[19px] bg-accent-green  py-[3.3px] pl-[10px] pr-[5px]'>
            <input
              id='userSearch'
              type='text'
              placeholder='ユーザーネームで自分の順位を検索…'
              className='w-full bg-accent-green font-sub text-[12px] text-base-secondary'
            />
            <Image src={search} alt='search' width={24} height={24} />
          </div>
        </div>
        <ul className='mt-[10px] grid gap-y-[10px] overflow-y-scroll'>
          {Object.values(setRankingData(DUO_RANKING_MOCK, SOLO_RANKING_MOCK)).map(
            (rankingContents) =>
              (!isSearchUser || rankingContents.name.includes(isSearchUser)) && (
                <li key={rankingContents.ranking}>
                  <RankingCard
                    cardType={isSelectedTab}
                    name={rankingContents.name}
                    ranking={rankingContents.ranking}
                    score={rankingContents.score}
                  />
                </li>
              ),
          )}
        </ul>
      </div>
    </div>
  );
};
