import { NextPage } from 'next';
import React from 'react';

import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const RootPage: NextPage = () => {
  return (
    <DefaultLayout>
      <div className='mx-auto w-fit font-title text-[36px] text-light'>Introduction</div>
    </DefaultLayout>
  );
};
export default RootPage;
