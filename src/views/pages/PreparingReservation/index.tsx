import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import PreparingReservation from '../../../components/preparingReservationPage';

const PreparingReservationPage: NextPage = () => {
  return (
    <DefaultLayout
        metaDescription='LINE Botの予約受付が準備中であることを知らせるページ'
        pageTitle='受付準備中'
    >
      <ScrollRevealOnce>
        <PreparingReservation />
      </ScrollRevealOnce>
    </DefaultLayout>
  );
};

export default PreparingReservationPage;
