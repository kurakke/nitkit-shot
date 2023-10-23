import { QAndA } from '../types/QAndA';

export const GAMECONTENT_MOCK: QAndA = {
  firstQAndA: {
    id: 'firstQAndA',
    question: 'どのようにしたらスコアが高くなりますか?',
    answer:
      'クリア時間・ヘッドショット率・命中率・使用弾数・被弾数・撃破数などによってスコアが計算されているため、これらを向上することでスコアが高くなります。',
  },
  secondQAndA: {
    id: 'secondQAndA',
    question: '1プレイ何分ですか?',
    answer: '約5分を想定しています。',
  },
  thirdQAndA: {
    id: 'thirdQAndA',
    question: '小学生でも出来ますか？',
    answer:
      '銃を扱うため推奨年齢を10歳以上に設定しています。しかしあくまでも推奨なのでプレイ自体は誰でも可能です。',
  },
  forthQAndA: {
    id: 'forthQAndA',
    question: '何人プレイですか？',
    answer: '最大2人同時プレイ可能です。ソロプレイも可能です。',
  },
  fifthQAndA: {
    id: 'fifthQAndA',
    question: 'プレイ中の音は大きいですか？',
    answer: '音量調節ができますので大きいと感じた方はスタッフに申し出てください。',
  },
  sixthQAndA: {
    id: 'sixthQAndA',
    question: 'リロードは自動ですか？',
    answer:
      '打ち切った場合のみ自動で行われます。マガジンに残った状態でリロードする場合はリロードボタンを押すことでリロードできます。',
  },
  seventhQAndA: {
    id: 'seventhQAndA',
    question: '1人でプレイしている時に、途中から参加することできますか？',
    answer: '申し訳ございませんが、途中から参加人数を変更することはできません。',
  },
  eighthQAndA: {
    id: 'eighthQAndA',
    question: 'ゾンビは怖いですか？',
    answer: '怖くないです。ほぼ人の原型を留めています。',
  },
  ninthQAndA: {
    id: 'ninthQAndA',
    question: 'ゲームが苦手な人でも楽しめますか？',
    answer:
      '銃を画面に向かって動かすだけの簡単な操作性なので、ゲームが苦手な人でも楽しめると思います。',
  },
  tenthQAndA: {
    id: 'tenthQAndA',
    question: 'ランキングはどこで見れますか？',
    answer: 'ホームページから確認できます。',
  },
  eleventhQAndA: {
    id: 'eleventhQAndA',
    question: 'グロテスクな表現はありますか？',
    answer: 'ありません。グロテスク表現が苦手な方でも楽しめるゲームとなっております。',
  },
  twelfthQAndA: {
    id: 'twelfthQAndA',
    question: '難しいですか？',
    answer: 'あまり難しく作っていないので、楽しめると思います。',
  },
  thirteenthQAndA: {
    id: 'thirteenthQAndA',
    question: 'また遊びたいのですが、2回目以降も行っていいのでしょうか？',
    answer: 'はい、大丈夫です。1つの予約枠で1プレイのため、予約を再度お取りになられてください。',
  },
  fourteenthQAndA: {
    id: 'fourteenthQAndA',
    question: 'BB弾とか出るんですか？',
    answer: '出ません。銃を画面に向けて操作することでプレイできます。',
  },
};

export const RESERVATION_MOCK: QAndA = {
  firstQAndA: {
    id: 'firstQAndA',
    question: '予約はどのように行いますか？',
    answer:
      '予約はLINEbotで行います。まずはLINEbotを友だち登録して、予約管理ボタンを押し、案内に従って下さい。\n予約には1分もかからないのでお気軽に予約して下さい。',
  },
  secondQAndA: {
    id: 'secondQAndA',
    question: '予約したけど急にいけなくなりました。どうしたら良いですか？',
    answer:
      'どうしてもキャンセルする場合は予約したときと同様にLINEbotから予約用サイトにアクセスし、案内に従って下さい。',
  },
  thirdQAndA: {
    id: 'thirdQAndA',
    question: '予約した時間が分からなくなりました。どこから確認できますか？',
    answer: '予約をしたときのページからいつでも確認することができます。',
  },
  fourthQAndA: {
    id: 'fourthQAndA',
    question: '予約するためのLINEbotはどこで追加することができますか？',
    answer: '5E教室の受付、ホームページにて追加のためのリンクがあります。',
  },
  fifthQAndA: {
    id: 'fifthQAndA',
    question: '待ち時間はどこでわかりますか？',
    answer:
      'ゲーム全体の待ち時間は5E教室の受付、自グループの待ち時間はLINEの予約画面に表示されます。',
  },
  sixthQAndA: {
    id: 'sixthQAndA',
    question: '3人以上で参加したいのですがどうすればいいですか？',
    answer:
      '3人の場合、2人の枠と1人の枠（計2枠）で予約して下さい。また、4人の場合は2人の枠を2つ予約して下さい。\n1つの予約枠でのプレイ回数は1回となりますので、2人毎での予約をお願いします。',
  },
  seventhQAndA: {
    id: 'seventhQAndA',
    question: '予約時間に遅れそうです。',
    answer:
      '大幅に遅れた場合はキャンセルとなります。キャンセル後に到着された場合は、申し訳ありませんが予約をもう一度お取りいただくことになります。',
  },
  eighthQAndA: {
    id: 'eighthQAndA',
    question: '予約時間を指定できますか？',
    answer: '申し訳ありませんが、予約時間の指定は行っておりません。',
  },
};

export const OTHER_MOCK: QAndA = {
  firstQAndA: {
    id: 'firstQAndA',
    question: '友達がプレイしているところの動画を撮ってもいいですか？',
    answer:
      '申し訳ありませんが、ゲームに登場するキャラクターは実在の人物を元に作成しており、プライバシー保護のためプレイ画面の撮影は禁止となっております。\nただし、プレイ画面を写さず、同行者がプレイしている様子のみを撮影する場合は撮影可能です。ご理解とご協力の程よろしくお願いします。',
  },
  secondQAndA: {
    id: 'secondQAndA',
    question: 'プレイした時の写真等をSNSにあげてもいいですか？',
    answer:
      '申し訳ありませんが、ゲームに登場するキャラクターは実在の人物を元に作成しており、プライバシー保護のため、プレイ画面をSNSへ掲載することは禁止となっております。\nただし、プレイ画面を写していない同行者のゲームプレイの様子のみSNSへの掲載が可能です。SNSへの掲載による問題は4Iは一切責任を持ちませんので、各自で管理をお願いいたします。',
  },
  thirdQAndA: {
    id: 'thirdQAndA',
    question: '付き添いは可能ですか？',
    answer: '付き添いの方はプレイ中、後方からの見学が可能です。',
  },
};