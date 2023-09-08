import { NextPage } from 'next';
import React from 'react';

import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import Information from '../../../components/topPage/Information/index';

const RootPage: NextPage = () => {
  return (
    <DefaultLayout>
      <Information />
    </DefaultLayout>
  );
};
export default RootPage;
