// eslint-disable-next-line import/no-unresolved
import { QAndA } from '../../../types/QandA';

interface Props {
  englishQAndATitle: string;
  japaneseQAndATitle: string;
  qAndA: QAndA;
}

const QAndACard: ({ englishQAndATitle, japaneseQAndATitle, qAndA }: Props) => JSX.Element = ({
  englishQAndATitle,
  japaneseQAndATitle,
  qAndA,
}) => {
  return (
    <div className='mx-auto w-[390px] rounded-[15px] border border-accent-green bg-main p-[15px] pb-[25px] shadow-thin md:w-[738px]'>
      <div className='inline-flex w-fit items-end border-b-[2px] border-accent-yellow text-accent-yellow'>
        <p className='font-menu-english text-[56px] leading-[40px]'>{englishQAndATitle}</p>
        <p className='ml-[5px] font-menu-japanese text-[14px] leading-none'>{japaneseQAndATitle}</p>
      </div>
      <ul className='mt-[20px] grid gap-y-[30px] px-[5px]'>
        {Object.values(qAndA).map((qAndAContents) => (
          <li key={qAndAContents.id} className='font-main'>
            <div className='flex text-[16px] text-accent-green'>
              <p className='mr-[10px]'>Q.</p> <p>{qAndAContents.question}</p>
            </div>
            <div className='mt-[5px] flex text-[14px] text-accent-yellow'>
              <p className='mr-[10px]'>A.</p> <p>{qAndAContents.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QAndACard;
