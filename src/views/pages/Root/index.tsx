import { NextPage } from 'next';
import React from 'react';

import Loading from '../../../components/animation/ui/Loading';
import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
//eslint-disable-next-line import/no-unresolved
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
//eslint-disable-next-line import/no-unresolved
import { About } from '../../../components/topPage/About';
//eslint-disable-next-line import/no-unresolved
import Access from '../../../components/topPage/Access';
// eslint-disable-next-line import/no-unresolved
import Information from '../../../components/topPage/information/index';


const RootPage: NextPage = () => {
  return (
    <>
      <Loading />
      <DefaultLayout metaDescription='サイトのトップページです。' pageTitle='トップ'>
        <ScrollRevealOnce>
          <About />
        </ScrollRevealOnce>
        <ScrollRevealOnce>
          <Information />
        </ScrollRevealOnce>
        <ScrollRevealOnce>
          <Access />
        </ScrollRevealOnce>
      </DefaultLayout>
    </>
  );
};

export default RootPage;
