import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const RankingPage: NextPage = () => {
  return (
    <DefaultLayout metaDescription='ゲームのランキングを表示するページです。'>
      <TitleText title='ranking' />
    </DefaultLayout>
  );
};

export default RankingPage;
