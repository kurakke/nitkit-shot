import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const CreditPage: NextPage = () => {
  return (
    <DefaultLayout>
      <TitleText title='credit' />
    </DefaultLayout>
  );
};

export default CreditPage;
