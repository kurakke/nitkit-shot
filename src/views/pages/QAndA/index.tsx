import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import QAndA from '../../../components/qAndAPage';

const QAndAPage: NextPage = () => {
  return (
    <DefaultLayout metaDescription='よくある質問に対する回答を載せたページです。' pageTitle='Q&A'>
      <ScrollRevealOnce>
        <TitleText title='q&a' />
      </ScrollRevealOnce>
      <QAndA />
    </DefaultLayout>
  );
};

export default QAndAPage;
