import { GAMECONTENT_MOCK, OTHER_MOCK, RESERVATION_MOCK } from '../../../constants/qAndaMock';

import QAndACard from './QandACard';

const QAndA = () => {
  return (
    <div className=''>
      <QAndACard qAndaTitle='Game Content' qAndaTitlejp='ゲーム内容' qAnda={GAMECONTENT_MOCK} />
      <QAndACard qAndaTitle='Reservation' qAndaTitlejp='予約' qAnda={RESERVATION_MOCK} />
      <QAndACard qAndaTitle='Other' qAndaTitlejp='その他' qAnda={OTHER_MOCK} />
    </div>
  );
};

export default QAndA;
