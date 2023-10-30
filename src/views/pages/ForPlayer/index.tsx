import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import ForPlayer from '../../../components/forPlayerPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';


const ForPlayerPage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='遊ぶ方へ向けたチュートリアルや注意喚起を表示するページです。'
      pageTitle='遊ぶ人へ'
    >
      <ScrollRevealOnce>
        <TitleText title='for player' />
        <ForPlayer />
      </ScrollRevealOnce>
    </DefaultLayout>
  );
};

export default ForPlayerPage;
