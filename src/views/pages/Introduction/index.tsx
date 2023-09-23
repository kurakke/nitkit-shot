import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import Introduction from '../../../components/introductionPage';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const IntroductionPage: NextPage = () => {
  return (
    <DefaultLayout>
      <TitleText title='introduction' />
      <Introduction />
    </DefaultLayout>
  );
};

export default IntroductionPage;
