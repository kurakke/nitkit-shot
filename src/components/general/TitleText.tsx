import { TitleId } from '../../../types/TitleId';

interface Props {
  title: TitleId;
}

export const TitleText = ({ title }: Props): JSX.Element => {
  return (
    <h2 className='relative z-40 mx-auto w-fit font-title text-[36px] text-accent-green md:text-[50px]'>
      {title}
    </h2>
  );
};
