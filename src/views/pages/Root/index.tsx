import { NextPage } from 'next';
import React from 'react';

import Loading from '../../../components/animation/ui/Loading';
import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { About } from '../../../components/topPage/About';
import Access from '../../../components/topPage/Access';
import Information from '../../../components/topPage/Information/index';
import Reservation from '../../../components/topPage/Reservation/index';
import { beautifulLog } from '../../../util/log';
const RootPage: NextPage = () => {
  beautifulLog();
  return (
    <>
      <Loading />
      <DefaultLayout
        metaDescription='nit-kit-shotのホームページ'
        isTopPage
      >
        <div className='grid gap-y-[35px]'>
          <ScrollRevealOnce>
            <About />
          </ScrollRevealOnce>
          <ScrollRevealOnce>
            <Information />
          </ScrollRevealOnce>
          <ScrollRevealOnce>
            <Reservation />
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
