import classNames from 'classnames';
import { throttle } from 'lodash';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { DUO_RANKING_MOCK, SOLO_RANKING_MOCK } from '../../../constants/mockRankingData';
import search from '../../../public/search.svg';
import RankingInformation from '../../../types/RankingInformation';

import RankingCard from './RankingCard';
import RankingTab from './RankingTab';

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

  const rankingStyle = (duo: string, solo: string) => {
    switch (isSelectedTab) {
      case 'solo':
        return solo;
      case 'duo':
        return duo;
    }
  };

  const setRankingData = (duo: RankingInformation, solo: RankingInformation) => {
    switch (isSelectedTab) {
      case 'solo':
        return solo;
      case 'duo':
        return duo;
    }
  };

  return (
    <div className='mx-auto mb-[75px] mt-[10px] flex h-[1054px] w-[394px] flex-col'>
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
      <div
        className={classNames(
          'z-0 flex h-[96.4%] flex-col rounded-[15px] border-[1px] border-accent-green bg-main p-[10px]',
          `${rankingStyle('border-accent-yellow', 'border-accent-green')}`,
        )}
      >
        <div
          className={classNames(
            `mx-auto h-[3%] w-fit rounded-[13px] border px-[10px] font-ranking text-[16px] text-accent-green`,
            `${rankingStyle(
              'border-accent-yellow text-accent-yellow',
              'border-accent-green text-accent-green',
            )}`,
          )}
        >
          {rankingStyle('2 Player Leaders', '1 Player Leaders')}
        </div>
        <div className='mx-auto mt-[10px] flex h-[3.82%] w-[81.4%] items-center rounded-[19px] bg-main p-[5px] shadow-ranking'>
          <div
            className={classNames(
              `flex w-full justify-between rounded-[19px] py-[3.3px] pl-[10px] pr-[5px]`,
              `${rankingStyle('bg-accent-yellow', 'bg-accent-green')}`,
            )}
          >
            <input
              id='userSearch'
              type='text'
              placeholder='ユーザーネームで自分の順位を検索…'
              className={classNames(
                `w-full bg-accent-green font-sub text-[12px] text-base-secondary`,
                `${rankingStyle('bg-accent-yellow', 'bg-accent-green')}`,
              )}
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
