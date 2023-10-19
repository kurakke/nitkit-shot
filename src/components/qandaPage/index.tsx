import { GAMECONTENT_MOCK } from "constants/qandaMock";
import { RESERVATION_MOCK } from "constants/qandaMock";
import { OTHER_MOCK } from 'constants/qandaMock';
import QandACard from "./QandACard";


const QandA = () => {
  return (
      <div className=''>
        <QandACard qandaTitle='Game Content' qandaTitlejp='ゲーム内容' qanda={GAMECONTENT_MOCK} />
        <QandACard qandaTitle='Reservation' qandaTitlejp='予約' qanda={RESERVATION_MOCK} />
        <QandACard qandaTitle='Other' qandaTitlejp='その他' qanda={OTHER_MOCK} />
      </div>
  );
};

export default QandA;
