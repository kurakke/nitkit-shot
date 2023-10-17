import { QandA } from '../types/QandA';

export const QANDA_MOCK: QandA = {
  gameContent: {
    question: {
      firstQuestion: {
        id: 'firstQuestion',
        lines: ['どのようにしたらスコアが高くなりますか?'],
      },
      secondQuestion: {
        id: 'secondQuestion',
        lines: ['1プレイ何分ですか?'],
      },
      thirdQuestion: {
        id: 'thirdQuestion',
        lines: [''],
      },
      forthQuestion: {
        id: '',
        lines: [''],
      },
    },
    answer: {
      firstParagraph: {
        id: 'firstParagraph',
        lines: [
          'クリア時間・ヘッドショット率・命中率・使用弾数・被弾数・撃破数などによってスコアが計算されているため、これらを向上することでスコアが高くなります。',
        ],
      },
      secondAnswer: {
        id: 'secondAnswer',
        lines: ['約5分を想定しています。'],
      },
      thirdAnswer: {
        id: 'thirdAnswer',
        lines: [''],
      },
      forthAnswer: {
        id: 'forthAnswer',
        lines: [''],
      },
    },
  },
};

