import { NextPage } from 'next';
import React from 'react';

import ComingSoon from '../../../components/general/ComingSoon';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const MoviePage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='ゲームのプレイ動画やプレイ画像を表示するページです。'
      pageTitle='ムービー'
    >
      <TitleText title='movie' />
      <ComingSoon />
    </DefaultLayout>
  );
};

export default MoviePage;
{/* <div className='overflow-hidden [&<main]:px-0'>
<DefaultLayout metaDescription='準備中に表示されるサイトです。' pageTitle='準備中'>
  <TitleText title='coming soon' />
  <ComingSoon />
</DefaultLayout>
</div> */}