import { QAndA } from '../../../types/QAndA';

interface Props {
  qAndATitle: string;
  qAndATitlejp: string;
  qAndA: QAndA;
}

const QnadACard: ({ qAndA, qAndATitle, qAndATitlejp }: Props) => JSX.Element = ({
  qAndA,
  qAndATitle,
  qAndATitlejp,
}) => {
  return (
    <div className='m-[20px] mx-auto w-[390px] rounded-[15px] border-[1px] border-accent-green bg-main p-[15px]'>
      <div className='inline-flex w-fit items-end border-b-[2px] border-accent-yellow text-accent-yellow'>
        <p className='font-menu-english text-[56px] leading-[40px]'>{qAndATitle}</p>
        <p className='ml-[5px] font-menu-japanese text-[14px] leading-none'>{qAndATitlejp}</p>
      </div>
      <ul>
        {Object.values(qAndA).map((qAndACard) => (
          <li key={qAndACard.id} className='mx-[5px] my-[20px] font-main '>
            <p className='text-[16px] text-accent-green'>Q. {qAndACard.question}</p>
            <p className='mt-[5px] text-[14px] text-accent-yellow'>A. {qAndACard.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QnadACard;
