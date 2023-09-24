import { NextPage } from 'next';
import React from 'react';

import ForPlayer from '../../../components/forPlayerPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const ForPlayerPage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='遊ぶ方へ向けたチュートリアルや注意喚起を表示するページです。'
      pageTitle='遊ぶ人へ'
    >
      <TitleText title='for player' />
      <ForPlayer />
    </DefaultLayout>
  );
};

export default ForPlayerPage;
