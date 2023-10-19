import { QandA } from '../../../types/QandA';

interface Props {
  qandaTitle: string;
  qandaTitlejp: string;
  qanda: QandA;
}

const QnadACard: ({ qanda, qandaTitle, qandaTitlejp }: Props) => JSX.Element = ({
  qanda,
  qandaTitle,
  qandaTitlejp,
}) => {
  return (
    <div className='m-[20px] mx-auto w-[390px] rounded-[15px] border-[1px] border-accent-green bg-main p-[15px]'>
      <div className='inline-flex w-fit items-end border-b-[2px] border-accent-yellow text-accent-yellow'>
        <p className='font-menu-english text-[56px] leading-[40px]'>{qandaTitle}</p>
        <p className='ml-[5px] font-menu-japanese text-[14px] leading-none'>{qandaTitlejp}</p>
      </div>
      <ul>
        {Object.values(qanda).map((qandaCard) => (
          <li key={qandaCard.id} className='mx-[5px] my-[20px] font-main '>
            <p className='text-[16px] text-accent-green'>Q. {qandaCard.question}</p>
            <p className='mt-[5px] text-[14px] text-accent-yellow'>A. {qandaCard.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QnadACard;
