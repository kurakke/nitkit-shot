import { NextPage } from 'next';
import React from 'react';

import ComingSoon from '../../../components/comingSoonPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const ComingSoonPage: NextPage = () => {
  return (
    <DefaultLayout>
      <div className='overflow-hidden'>
        <TitleText title='coming soon' />
        <ComingSoon />
      </div>
    </DefaultLayout>
  );
};

export default ComingSoonPage;
