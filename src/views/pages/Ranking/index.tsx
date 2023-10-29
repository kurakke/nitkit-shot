import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { Ranking } from '../../../components/rankingPage/index';
import ComingSoon from '@/components/general/ComingSoon';

const RankingPage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='ゲームのランキングを表示するページです。'
      pageTitle='ランキング'
    >
      <TitleText title='ranking' />
      <ComingSoon />
    </DefaultLayout>
  );
};

export default RankingPage;
