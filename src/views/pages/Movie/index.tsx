import { NextPage } from 'next';
import React from 'react';

import ComingSoon from '../../../components/general/ComingSoon';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const MoviePage: NextPage = () => {
  return (
    <div className='overflow-hidden [&<main]:px-0'>
      <DefaultLayout
        metaDescription='ゲームのプレイ動画やプレイ画像を表示するページです。'
        pageTitle='ムービー'
      >
        <TitleText title='movie' />
        <ComingSoon />
      </DefaultLayout>
    </div>
  );
};

export default MoviePage;