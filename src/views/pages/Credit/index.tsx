import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import Credit from '../../../components/creditPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const CreditPage: NextPage = () => {
  return (
    <DefaultLayout
      metaDescription='nit-kit-shotの制作者たち'
      url='https://nitkit-shot.vercel.app/credit'
      topPage={false}
    >
      <ScrollRevealOnce>
        <TitleText title='credit' />
      </ScrollRevealOnce>
      <Credit />
    </DefaultLayout>
  );
};

export default CreditPage;
