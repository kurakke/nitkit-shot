import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { TitleText } from '../../../components/general/TitleText';
import Introduction from '../../../components/introductionPage';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const IntroductionPage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='nit-kit-shotのゲーム紹介'
      url='https://nitkit-shot.vercel.app/introduction'
      topPage={false}
    >
      <ScrollRevealOnce>
        <TitleText title='introduction' />
        <Introduction />
      </ScrollRevealOnce>
    </DefaultLayout>
  );
};

export default IntroductionPage;
