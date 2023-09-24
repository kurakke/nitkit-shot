import { NextPage } from 'next';
import React from 'react';

import Credit from '../../../components/creditPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const CreditPage: NextPage = () => {
  return (
    <DefaultLayout metaDescription='制作スタッフの一覧を表示するページです。'>
      <TitleText title='credit' />
      <Credit />
    </DefaultLayout>
  );
};

export default CreditPage;
