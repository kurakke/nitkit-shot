import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import ComingSoon from '../../../components/general/ComingSoon';
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
          <ComingSoon />
        </ScrollRevealOnce>
      </DefaultLayout>
    </div>
  );
};

export default RankingPage;
