import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
// eslint-disable-next-line import/order
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

// eslint-disable-next-line import/order
import { About } from '../../../components/topPage/About';

// eslint-disable-next-line import/no-unresolved
import Information from '../../../components/topPage/Information/index';

const RootPage: NextPage = () => {
  return (
    <DefaultLayout>
      <ScrollRevealOnce>
        <About />
      </ScrollRevealOnce>
      <ScrollRevealOnce>
        <Information />
      </ScrollRevealOnce>
    </DefaultLayout>
  );
};
export default RootPage;
