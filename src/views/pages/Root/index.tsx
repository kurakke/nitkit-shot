import { NextPage } from 'next';
import React from 'react';

import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

// eslint-disable-next-line import/no-unresolved
import Information from '@/components/topPage/information';

const RootPage: NextPage = () => {
  return (
    <DefaultLayout>
      <Information />
    </DefaultLayout>
  );
};
export default RootPage;
