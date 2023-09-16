/* eslint-disable sort/object-properties */
import React from 'react';

import allow from '../../../public/allow.svg';
import { ImageContents } from '../../../types/ImageContents';
import { Sentence } from '../../../types/Sentence';
import ImageContentsGenerater from '../general/ImageContentsGenerater';
import SentenceGenerater from '../general/SentenceGenerater';

const WARNING_MOCK_CONTENTS: Sentence = {
  firstParagraph: {
    id: 'firstParagraph',
    lines: ['銃をむやみに振り回さないで下さい。人やモノにぶつかる可能性がありとても危険です。'],
  },
  secondParagraph: {
    id: 'secondParagraph',
    lines: [
      '銃を落とさないで下さい。中には精密機器が入っており一度の落下で破損するおそれがあります。',
    ],
  },
  thirdParagraph: {
    id: 'thirdParagraph',
    lines: ['銃を強く握りすぎないで下さい。破損するおそれがあります。'],
  },
  fourthParagraph: {
    id: 'fourthParagraph',
    lines: ['銃で殴らないで下さい。危ないです。'],
  },
  fifthParagraph: {
    id: 'fifthParagraph',
    lines: ['銃を大切に扱って下さい。壊れると作成者が暴れます。'],
  },
  sixthParagraph: {
    id: 'sixthParagraph',
    lines: ['順番を守って下さい。揉めます。'],
  },
  seventhParagraph: {
    id: 'seventhParagraph',
    lines: ['予約をした人が優先です。当然です。'],
  },
  eighthParagraph: {
    id: 'eighthParagraph',
    lines: ['ルールを守って楽しく遊びましょう。'],
  },
  ninthParagraph: {
    id: 'ninthParagraph',
    lines: ['呼び出しても来られない場合は予約を繰り越す場合があります。ご了承下さい。'],
  },
};

const FORPLAYER_MOCK_CONTENTS: ImageContents = {
  hostel: {
    description: {
      firstParagraph: {
        id: 'firstParagraph',
        lines: [
          'ゾンビ（英語: zombie）は、何らかの力で死体のまま蘇った人間の総称である。 多くはホラーやファンタジー作品などに登場し、「腐った死体が歩き回る」という描写が多くなされる架空の存在である。',
        ],
      },
    },
    id: 'hostel',
    image: 'hostel.mp4',
    title: 'ゾンビ',
    type: 'video',
  },
  hostel2: {
    description: {
      firstParagraph: {
        id: 'firstParagraph',
        lines: [
          'もともと鳥猟や小型の動物の狩猟用だが、大きな弾丸や一発弾なども使用でき、大型獣の狩猟にも用いられるようになった。 また、散弾銃を警備用として軍隊や警察で用いている国もある。',
        ],
      },
    },
    id: 'hostel2',
    image: allow,
    title: '散弾銃',
    type: 'picture',
  },
};

const ForPlayer = () => {
  return (
    <div className='mx-auto mt-[10px] flex flex-col items-center'>
      <div className='mb-[20px] mt-[10px] border-b border-accent-yellow text-[20px] font-bold text-accent-yellow'>
        チュートリアルと遊び方
      </div>
      <div className='grid gap-y-[30px]'>
        {Object.values(FORPLAYER_MOCK_CONTENTS).map((forPlayerContents) => (
          <li key={forPlayerContents.id}>
            <ImageContentsGenerater
              description={forPlayerContents.description}
              image={forPlayerContents.image}
              title={forPlayerContents.title}
              type={forPlayerContents.type}
            />
          </li>
        ))}
      </div>
      <div className='mt-[30px] flex w-[389px] flex-col items-center'>
        <div className='mb-[10px] mr-[11px] font-main text-[20px] font-bold text-accent-yellow'>
          ※注意事項※
        </div>
        <SentenceGenerater
          sentence={WARNING_MOCK_CONTENTS}
          textSize='text-[13px]'
          leading='leading-[20px]'
          gap='gap-y-[20px]'
          point
        />
      </div>
    </div>
  );
};

export default ForPlayer;
