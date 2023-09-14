import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const QAndAPage: NextPage = () => {
  return (
    <DefaultLayout>
      <TitleText title='qanda' />
    </DefaultLayout>
  );
};

export default QAndAPage;
