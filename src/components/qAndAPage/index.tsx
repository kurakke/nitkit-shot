import { GAMECONTENT_MOCK, OTHER_MOCK, RESERVATION_MOCK } from '../../../constants/qAndAMock';

import QAndACard from './QAndACard';

const QAndA = () => {
  return (
    <div className='mt-[40px] grid gap-y-[30px]'>
      <QAndACard
        englishQAndATitle='Game Content'
        japaneseQAndATitle='ゲーム内容'
        qAndA={GAMECONTENT_MOCK}
      />
      <QAndACard
        englishQAndATitle='Reservation'
        japaneseQAndATitle='予約'
        qAndA={RESERVATION_MOCK}
      />
      <QAndACard englishQAndATitle='Other' japaneseQAndATitle='その他' qAndA={OTHER_MOCK} />
    </div>
  );
};

export default QAndA;
