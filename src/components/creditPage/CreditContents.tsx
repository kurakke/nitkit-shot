import { Credit } from '../../../types/Credit';

interface Props {
  affiliation: string;
  credit: Credit;
}

const CreditContents: ({ affiliation, credit }: Props) => JSX.Element = ({
  affiliation,
  credit,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-[25px] text-[16px]'>{affiliation}</div>
      <ul className='grid gap-y-[10px] text-[12px]'>
        {Object.values(credit).map((CreditContents) => (
          <li
            key={CreditContents.id}
            className='flex w-[380px] gap-x-[100px] [&>p]:flex [&>p]:w-full'
          >
            <p className='place-content-end'>{CreditContents.post}</p>
            <p className='place-content-start'>{CreditContents.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreditContents;
