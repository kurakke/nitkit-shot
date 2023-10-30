import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import ComingSoon from '../../../components/general/ComingSoon';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const ForPlayerPage: NextPage = () => {
  return (
    <div className='overflow-hidden [&<main]:px-0'>
      <DefaultLayout
        metaDescription='遊ぶ方へ向けたチュートリアルや注意喚起を表示するページです。'
        pageTitle='遊ぶ人へ'
      >
        <ScrollRevealOnce>
          <TitleText title='for player' />
          <ComingSoon />
        </ScrollRevealOnce>
      </DefaultLayout>
    </div>
  );
};

export default ForPlayerPage;
