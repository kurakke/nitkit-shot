import { NextPage } from 'next';
import React from 'react';

import ForPlayer from '../../../components/forPlayerPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const ForPlayerPage: NextPage = () => {
  return (
    <DefaultLayout>
      <TitleText title='for player' />
      <ForPlayer />
    </DefaultLayout>
  );
};

export default ForPlayerPage;
