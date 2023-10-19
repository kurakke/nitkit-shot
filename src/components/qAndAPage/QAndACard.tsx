import { QAndA } from '../../../types/QAndA';

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
    <div className='mx-auto w-[390px] rounded-[15px] border border-accent-green bg-main p-[15px]'>
      <div className='inline-flex w-fit items-end border-b-[2px] border-accent-yellow text-accent-yellow'>
        <p className='font-menu-english text-[56px] leading-[40px]'>{englishQAndATitle}</p>
        <p className='ml-[5px] font-menu-japanese text-[14px] leading-none'>{japaneseQAndATitle}</p>
      </div>
      <ul className='mt-[20px] grid gap-y-[30px]'>
        {Object.values(qAndA).map((qAndAContents) => (
          <li key={qAndAContents.id} className='mx-[5px] font-main '>
            <p className='text-[16px] text-accent-green'>Q. {qAndAContents.question}</p>
            <p className='mt-[5px] text-[14px] text-accent-yellow'>A. {qAndAContents.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QAndACard;
