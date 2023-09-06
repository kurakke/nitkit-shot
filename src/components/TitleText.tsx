import { TitleId } from '../../types/TitleId';

interface Props {
  title: TitleId;
}

export const TitleText = ({ title }: Props): JSX.Element => {
  return (
    <h2 className='mx-auto w-fit font-title text-[36px] text-accent-green'>
      {title}
    </h2>
  );
};
