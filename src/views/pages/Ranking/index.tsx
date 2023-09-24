import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const RankingPage: NextPage = () => {
  return (
    <DefaultLayout pageTitle='ランキング'>
      <TitleText title='ranking' />
    </DefaultLayout>
  );
};

export default RankingPage;
