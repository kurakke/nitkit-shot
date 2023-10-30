import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import ComingSoon from '../../../components/general/ComingSoon';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';

const MoviePage: NextPage = () => {
  return (
    <div className='overflow-hidden [&<main]:px-0'>
      <DefaultLayout
        metaDescription='nit-kit-shotの各種映像'
        pageTitle='ムービー'
      >
        <ScrollRevealOnce>
          <TitleText title='movie' />
          <ComingSoon />
        </ScrollRevealOnce>
      </DefaultLayout>
    </div>
  );
};

export default MoviePage;
