import { TitleId } from '../../types/TitleId';

interface Props {
  title: TitleId;
}

export const TitleText = ({ title }: Props): JSX.Element => {
  return (
    <h2 className='mx-auto w-fit font-title text-[40px] text-accent-green md:text-[50px]'>
      {title}
    </h2>
  );
};
