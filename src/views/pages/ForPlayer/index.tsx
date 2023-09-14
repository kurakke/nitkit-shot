import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const ForPlayerPage: NextPage = () => {
  return (
    <DefaultLayout>
      <TitleText title='forplayer' />
    </DefaultLayout>
  );
};

export default ForPlayerPage;
