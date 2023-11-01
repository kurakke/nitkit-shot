import { Button } from '@nextui-org/react';
import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';

import { DUO_RANKING_MOCK, SOLO_RANKING_MOCK } from '../../../constants/mockRankingData';
import search from '../../../public/search.svg';

import RankingCard from './RankingCard';
import RankingTab from './RankingTab';

export const Ranking = (): JSX.Element => {
  const [isSelectedTab, setIsSelectedTab] = useState<'solo' | 'duo'>('solo');
  const [isSearchUser, setIsSearchUser] = useState<string>('');

  const rankingStyle = (duo: string, solo: string) => {
    switch (isSelectedTab) {
      case 'solo':
        return solo;
      case 'duo':
        return duo;
    }
  };

  return (
    <div className='mx-auto mb-[75px] mt-[10px] flex h-[1104px] w-[390px] flex-col md:w-[640px] xl:w-[1000px]'>
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
        <div
          className={classNames(
            `mx-auto mt-[10px] flex h-[3.82%] w-[80.9%] items-center justify-between rounded-[19px] border-[5px] border-main pl-[10px] pr-[5px] shadow-ranking md:w-[65%] xl:w-[50%]`,
            `${rankingStyle('bg-accent-yellow', 'bg-accent-green')}`,
          )}
        >
          <input
            type='text'
            id='userSearch'
            placeholder='ユーザーネームで自分の順位を検索…'
            className={classNames(
              `h-full w-full bg-accent-green font-sub text-[12px] text-base-secondary`,
              `${rankingStyle('bg-accent-yellow', 'bg-accent-green')}`,
            )}
          />
          <Button
            onClick={() =>
              setIsSearchUser((document.getElementById('userSearch') as HTMLInputElement)?.value)
            }
            className='h-fit min-h-0 w-fit min-w-0 bg-transparent p-0'
          >
            <Image src={search} alt='search' width={24} height={24} />
          </Button>
        </div>
        <ul className='mt-[10px] grid items-center gap-y-[10px] overflow-y-hidden'>
          {isSelectedTab === 'solo' &&
            (Object.values(SOLO_RANKING_MOCK).length === 0 ? (
              <div className='mt-[80px] text-center font-main text-accent-green'>
                ゲームをプレイすると
                <br />
                ここにランキングが表示されます！
              </div>
            ) : (
              Object.values(SOLO_RANKING_MOCK).map(
                (rankingContents) =>
                  (!isSearchUser || rankingContents.playerName.includes(isSearchUser)) && (
                    <li key={rankingContents.ranking}>
                      <RankingCard cardType={isSelectedTab} contents={rankingContents} />
                    </li>
                  ),
              )
            ))}
          {isSelectedTab === 'duo' &&
            (Object.values(DUO_RANKING_MOCK).length === 0 ? (
              <div className='mt-[80px] text-center font-main text-accent-yellow'>
                ゲームをプレイすると
                <br />
                ここにランキングが表示されます！
              </div>
            ) : (
              Object.values(DUO_RANKING_MOCK).map(
                (rankingContents) =>
                  (!isSearchUser ||
                    rankingContents.playerName.onePlayer.includes(isSearchUser) ||
                    rankingContents.playerName.twoPlayer.includes(isSearchUser)) && (
                    <li key={rankingContents.ranking}>
                      <RankingCard cardType={isSelectedTab} contents={rankingContents} />
                    </li>
                  ),
              )
            ))}
        </ul>
      </div>
    </div>
  );
};
