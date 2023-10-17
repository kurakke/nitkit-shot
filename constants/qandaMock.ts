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
        lines: ['小学生でも出来ますか？'],
      },
      forthQuestion: {
        id: 'forthQuestion',
        lines: ['何人プレイですか？'],
      },
      fifthQuestion: {
        id: 'fifthQuestion',
        lines: ['アイテムとはなんですか？'],
      },
      sixthQuestion: {
        id: 'sixthQuestion',
        lines: ['リロードは自動ですか？'],
      },
      seventhQuestion: {
        id: 'seventhQuestion',
        lines: ['1人でプレイしている時に、途中から参加することできますか？'],
      },
      eighthQuestion: {
        id: 'eighthQuestion',
        lines: [''],
      },
      ninthQuestion: {
        id: 'ninthQuestion',
        lines: [''],
      },
      tenthQuestion: {
        id: 'tenthQuestion',
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
        lines: ['銃を扱うため推奨年齢を10歳以上に設定しています。しかしあくまでも推奨なのでプレイ自体は誰でも可能です。'],
      },
      forthAnswer: {
        id: 'forthAnswer',
        lines: ['最大2人同時プレイ可能です。ソロプレイも可能です。'],
      },
      fifthAnswer: {
        id: 'fifthAnswer',
        lines: ['どこかにあるQRコードを読み込むことで持ち込めるアイテムです。これがあると攻略が楽かも・・・'],
      },
      sixthAnswer: {
        id: 'sixthAnswer',
        lines: ['打ち切った場合のみ自動で行われます。マガジンに残った状態でリロードする場合はリロードボタンを押すことでリロードできます。'],
      },
      eighthAnswer: {
        id: 'eighthAnswer',
        lines: ['申し訳ございませんが、途中から参加人数を変更することはできません。'],
      },
      ninthAnswer: {
        id: 'ninthAnswer',
        lines: [''],
      },
      tenthAnswer: {
        id: 'tenthAnswer',
        lines: [''],
      },
    },
  },
  reservation: {
    question: {
      firstQuestion: {
        id: '',
        lines: [''],
      },
    },
    answer: {
      fitstAnswer: {
        id: '',
        lines: [''],
      },
    },
  },
};
