import { QandA } from 'types/QandA';

interface Props {
  qandaTitle: string;
  qandaTitlejp: string;
  qanda: QandA;
}

const QnadACard: ({ qandaTitle, qandaTitlejp, qanda }: Props) => JSX.Element = ({
  qandaTitle,
  qandaTitlejp,
  qanda,
}) => {
  return (
    <div className='m-[20px] w-[390px] bg-main p-[15px] rounded-[15px] border-[1px] border-accent-green mx-auto'>
      <div className='inline-flex w-fit items-end border-b-[2px] border-accent-yellow text-accent-yellow'>
        <p className='font-menu-english text-[56px] leading-[40px]'>{qandaTitle}</p>
        <p className='ml-[5px] font-menu-japanese text-[14px] leading-none'>{qandaTitlejp}</p>
        </div>
        <ul>
          {Object.values(qanda).map((qandaCard) => (
            <li key={qandaCard.id} className='font-main my-[20px] mx-[5px] '>
              <p className='text-accent-green text-[16px]'>Q. {qandaCard.question}</p>
              <p className='text-accent-yellow text-[14px] mt-[5px]'>A. {qandaCard.answer}</p>
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default QnadACard;