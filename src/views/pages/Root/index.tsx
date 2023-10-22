import { NextPage } from 'next';
import React from 'react';

import Loading from '../../../components/animation/ui/Loading';
import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { About } from '../../../components/topPage/About';
import Access from '../../../components/topPage/Access';
// eslint-disable-next-line import/no-unresolved
import Information from '../../../components/topPage/Information/index';


const RootPage: NextPage = () => {
  return (
    <>
      <Loading />
      <DefaultLayout metaDescription='サイトのトップページです。' pageTitle='トップ'>
        <div className='grid gap-y-[35px]'>
          <ScrollRevealOnce>
            <About />
          </ScrollRevealOnce>
          <ScrollRevealOnce>
            <Information />
          </ScrollRevealOnce>
          <ScrollRevealOnce>
            <Access />
          </ScrollRevealOnce>
        </div>
      </DefaultLayout>
    </>
  );
};

export default RootPage;
