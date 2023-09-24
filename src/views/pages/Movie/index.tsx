import { NextPage } from 'next';
import React from 'react';

import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const MoviePage: NextPage = () => {
  return (
    <DefaultLayout metaDescription='ゲームのプレイ動画やプレイ画像を表示するページです。'>
      <TitleText title='movie' />
    </DefaultLayout>
  );
};

export default MoviePage;
