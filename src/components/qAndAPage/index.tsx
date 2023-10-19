import { GAMECONTENT_MOCK, OTHER_MOCK, RESERVATION_MOCK } from '../../../constants/qAndAMock';

import QAndACard from './QAndACard';

const QAndA = () => {
  return (
    <div className=''>
      <QAndACard qAndATitle='Game Content' qAndATitlejp='ゲーム内容' qAndA={GAMECONTENT_MOCK} />
      <QAndACard qAndATitle='Reservation' qAndATitlejp='予約' qAndA={RESERVATION_MOCK} />
      <QAndACard qAndATitle='Other' qAndATitlejp='その他' qAndA={OTHER_MOCK} />
    </div>
  );
};

export default QAndA;
