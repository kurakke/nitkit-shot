import { NextPage } from 'next';
import React from 'react';

import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import PreparingReservation from '../../../components/preparingReservationPage';

const PreparingReservationPage: NextPage = () => {
    return (
        <DefaultLayout
            metaDescription='LINE Botの予約受付が準備中であることを知らせるページです。'
            pageTitle='受付準備中'
        >
            <PreparingReservation />
        </DefaultLayout>
    );
};

export default PreparingReservationPage;