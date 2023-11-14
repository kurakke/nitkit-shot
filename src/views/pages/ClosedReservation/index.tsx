import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import ClosedReservation from '../../../components/closedReservationPage';

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
