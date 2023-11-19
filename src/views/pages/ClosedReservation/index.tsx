import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import ClosedReservation from '../../../components/closedReservationPage';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const ClosedReservationPage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='LINE Botの予約受付が終了したことを知らせるページ'
      isTopPage={false}
    >
      <ScrollRevealOnce>
        <ClosedReservation />
      </ScrollRevealOnce>
    </DefaultLayout>
  );
};

export default ClosedReservationPage;
