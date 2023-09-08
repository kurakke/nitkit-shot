import { NextPage } from 'next';
import React from 'react';

import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

import { About } from '@/components/topPage/About';

const RootPage: NextPage = () => {
  return (
    <DefaultLayout>
      <About />
    </DefaultLayout>
  );
};
export default RootPage;
