import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import ForPlayer from '../../../components/forPlayerPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const ForPlayerPage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='nit-kit-shotを遊ぶ前にご確認下さい。'
      isTopPage={false}
    >
      <ScrollRevealOnce>
        <TitleText title='for player' />
        <ForPlayer />
      </ScrollRevealOnce>
    </DefaultLayout>
  );
};

export default ForPlayerPage;
