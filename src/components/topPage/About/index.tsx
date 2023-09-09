/* eslint-disable sort/object-properties */
import React from 'react';

import { Sentence } from '../../../../types/Sentence';
import { SentenceGeneration } from '../../../components/general/SentenceGeneration';
import { RedirectButton } from '../../general/RedirectButton';
import { TitleText } from '../../general/TitleText';

const INTRODUCTION_SENTENCE: Sentence = {
  firstParagraph: {
    id: 'firstParagraph',
    lines: ['ある日突然北九州高専に', '現れたゾンビたち！！！！！！！！'],
  },
  secondParagraph: {
    id: 'secondParagraph',
    lines: ['その正体は高専生と先生であった!?'],
  },
  thirdParagraph: {
    id: 'thirdParagraph',
    lines: ['ゾンビを元の姿に戻すため4号館の奥へと歩み', '進めていくのだが……'],
  },
  fourthParagraph: {
    id: 'fourthParagraph',
    lines: ['4I完全自作の', 'ハチャメチャゾンビシューティング！！！！'],
  },
};

const PS_SENTENCE: Sentence = {
  firstSetence: {
    id: 'firstParagraph',
    lines: ['P.S.'],
  },
  secondParagraph: {
    id: 'secondParagraph',
    lines: ['QRコードを読み取ってからプレイすると', 'いいことがあるかも…?'],
  },
};

export const About = (): JSX.Element => {
  return (
    <>
      <TitleText title='about' />
      <div className='mx-auto mt-[10px] w-fit border-b border-accent-yellow text-[20px] leading-none text-accent-yellow'>
        迫り来るゾンビを撃て！
      </div>
      <div className='mt-[20px] text-center'>
        <SentenceGeneration
          sentence={INTRODUCTION_SENTENCE}
          gap='gap-y-[50px]'
          leading='leading-[30px]'
          text='text-[16px]'
        />
      </div>
      <div className='mx-auto mt-[20px] flex w-fit flex-col gap-y-[20px]'>
        <RedirectButton
          text='もっと詳しく'
          backGroundColor='bg-accent-green'
          textColor='text-main'
          path='introduction'
        />
        <RedirectButton
          text='プレイする人へ'
          backGroundColor='bg-accent-yellow'
          textColor='text-main'
          path='forPlayer'
        />
      </div>
      <div className='mt-[20px] text-center'>
        <SentenceGeneration
          sentence={PS_SENTENCE}
          gap='gap-y-[50px]'
          leading='leading-[30px]'
          text='text-[16px]'
        />
      </div>
      <ul className='list-disc'>
        <li>secondParagraph</li>
      </ul>
    </>
  );
};
