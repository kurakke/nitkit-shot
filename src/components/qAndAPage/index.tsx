import { GAME_CONTENT, OTHER, RESERVATION } from '../../../constants/qAndA';
import ScrollRevealOnce from '../animation/ui/ScrollRevealOnce';

import QAndACard from './QAndACard';

const QAndA = () => {
  const QAndAs = [
    {
      englishQAndATitle: 'Game Content',
      japaneseQAndATitle: 'ゲーム内容',
      qAndA: GAME_CONTENT,
    },
    {
      englishQAndATitle: 'Reservation',
      japaneseQAndATitle: '予約',
      qAndA: RESERVATION,
    },
    {
      englishQAndATitle: 'Other',
      japaneseQAndATitle: 'その他',
      qAndA: OTHER,
    },
  ];
  return (
    <div className='mt-[40px] grid gap-y-[30px] whitespace-pre-line'>
      {QAndAs.map((QAndA, index) => (
        <ScrollRevealOnce key={index}>
          <QAndACard
            englishQAndATitle={QAndA.englishQAndATitle}
            japaneseQAndATitle={QAndA.japaneseQAndATitle}
            qAndA={QAndA.qAndA}
          />
        </ScrollRevealOnce>
      ))}
    </div>
  );
};

export default QAndA;
