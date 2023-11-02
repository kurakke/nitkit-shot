import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import QAndA from '../../../components/qAndAPage';

const QAndAPage: NextPage = () => {
  return (
    <DefaultLayout metaDescription='nit-kit-shotのよくある質問' isTopPage={false}>
      <ScrollRevealOnce>
        <TitleText title='q&a' />
      </ScrollRevealOnce>
      <QAndA />
    </DefaultLayout>
  );
};

export default QAndAPage;
