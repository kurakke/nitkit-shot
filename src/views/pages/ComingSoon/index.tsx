import { NextPage } from 'next';
import React from 'react';

import ComingSoon from '../../../components/comingSoonPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const ComingSoonPage: NextPage = () => {
  return (
    <div className='overflow-hidden [&<main]:px-0'>
      <DefaultLayout metaDescription='準備中に表示されるサイトです。'>
        <TitleText title='coming soon' />
        <ComingSoon />
      </DefaultLayout>
    </div>
  );
};

export default ComingSoonPage;
