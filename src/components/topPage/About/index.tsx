/* eslint-disable sort/object-properties */
import { RedirectButton } from '../../general/RedirectButton';
import { TitleText } from '../../general/TitleText';

interface ParagraphProps {
  id: string;
  lines: string[];
}

const INTRODUCTION_SENTENCE: Record<string, ParagraphProps> = {
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

const PS_SENTENCE: Record<string, ParagraphProps> = {
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
      <ul className='mt-[20px] grid gap-y-[50px] text-center font-main text-[16px] leading-[30px] text-light'>
        {Object.values(INTRODUCTION_SENTENCE).map((introductionParagraphs) => (
          <li key={introductionParagraphs.id}>
            {Object.values(introductionParagraphs.lines).map((inroductionTexts) => (
              <p key={inroductionTexts}>{inroductionTexts}</p>
            ))}
          </li>
        ))}
      </ul>
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
      <ul className='mt-[20px] grid gap-y-[50px] text-center font-main text-[16px] leading-[30px] text-light'>
        {Object.values(PS_SENTENCE).map((psParagraphs) => (
          <li key={psParagraphs.id}>
            {Object.values(psParagraphs.lines).map((psTexts) => (
              <p key={psTexts}>{psTexts}</p>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};
