import { NextPage } from 'next';
import React from 'react';

import Credit from '../../../components/creditPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const CreditPage: NextPage = () => {
  return (
    <DefaultLayout pageTitle='クレジット'>
      <TitleText title='credit' />
      <Credit />
    </DefaultLayout>
  );
};

export default CreditPage;
