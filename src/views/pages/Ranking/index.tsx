import { NextPage } from 'next';
import React from 'react';

import ComingSoon from '../../../components/general/ComingSoon';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const RankingPage: NextPage = () => {
  return (
    <div className='overflow-hidden [&<main]:px-0'>
      <DefaultLayout
        metaDescription='nit-kit-shotのランキング'
        isTopPage={false}
      >
        <TitleText title='ranking' />
        <ComingSoon />
      </DefaultLayout>
    </div>
  );
};

export default RankingPage;
