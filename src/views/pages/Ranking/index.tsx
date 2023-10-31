import { NextPage } from 'next';
import React from 'react';

import { Ranking } from '../../../components/rankingPage';
import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const RankingPage: NextPage = () => {
  return (
    <div className='overflow-hidden [&<main]:px-0'>
      <DefaultLayout
        metaDescription='ゲームのランキングを表示するページです。'
        pageTitle='ランキング'
      >
        <ScrollRevealOnce>
          <TitleText title='ranking' />
          <Ranking />
        </ScrollRevealOnce>
      </DefaultLayout>
    </div>
  );
};

export default RankingPage;
