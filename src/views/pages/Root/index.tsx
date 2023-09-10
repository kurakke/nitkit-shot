import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { About } from '../../../components/topPage/About';

const RootPage: NextPage = () => {
  return (
    <DefaultLayout>
      <ScrollRevealOnce>
        <About />
      </ScrollRevealOnce>
    </DefaultLayout>
  );
};
export default RootPage;
