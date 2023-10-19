import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import QandA from '@/components/qandaPage';

const QAndAPage: NextPage = () => {
  return (
    <DefaultLayout metaDescription='よくある質問に対する回答を載せたページです。' pageTitle='Q&A'>
      <TitleText title='q&a' />
      <QandA />
    </DefaultLayout>
  );
};

export default QAndAPage;
