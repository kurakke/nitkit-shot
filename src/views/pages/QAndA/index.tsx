import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const QAndAPage: NextPage = () => {
  return (
    <DefaultLayout metaDescription='よくある質問に対する回答を載せたページです。' pageTitle='Q&A'>
      <TitleText title='q&a' />
    </DefaultLayout>
  );
};

export default QAndAPage;
