/* eslint-disable sort/object-properties */
import React from 'react';

import { RedirectButton } from '../../general/RedirectButton';
import SentenceGenerator from '../../general/SentenceGenerator';
import { TitleText } from '../../general/TitleText';

const INTRODUCTION_SENTENCE: string[] = [
  'ある日突然北九州高専に\n現れたゾンビたち！！！！！！！！',
  'その正体は高専生と先生であった!?',
  'ゾンビを元の姿に戻すため4号館の奥へと\n歩みを進めていくのだが……',
  '4I完全自作の\nハチャメチャゾンビシューティング！！！！',
];

// const PS_SENTENCE: Sentence = {
//   firstParagraph: {
//     id: 'firstParagraph',
//     sentence: 'P.S.',
//   },
//   secondParagraph: {
//     id: 'secondParagraph',
//     sentence: 'QRコードを読み取ってからプレイすると\nいいことがあるかも…?',
//   },
// };

export const About = (): JSX.Element => {
  return (
    <>
      <TitleText title='about' />
      <div className='mx-auto mt-[10px] w-fit border-b border-accent-yellow text-[20px] font-bold leading-none text-accent-yellow md:text-[24px]'>
        迫り来るゾンビを撃て！
      </div>
      <div className='mt-[20px] text-center'>
        <SentenceGenerator
          sentence={INTRODUCTION_SENTENCE}
          gap='gap-y-[50px]'
          leading='leading-[30px]'
          textSize='text-[16px]'
          point={false}
        />
      </div>
      <div className='mx-auto mt-[20px] flex w-fit flex-col gap-x-[40px] gap-y-[20px] md:flex-row'>
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
          path='forplayer'
        />
      </div>
      {/* <div className='mt-[20px] text-center'>
        <SentenceGenerator
          sentence={PS_SENTENCE}
          gap='gap-y-[50px]'
          leading='leading-[30px]'
          textSize='text-[16px]'
          point={false}
        />
      </div> */}
    </>
  );
};
