import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import Introduction from '../../../components/introductionPage';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const IntroductionPage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='ゲームの設定などを表示するページです。'
      pageTitle='イントロダクション'
    >
      <TitleText title='introduction' />
      <Introduction />
    </DefaultLayout>
  );
};

export default IntroductionPage;
