import { DuoRankingProps } from '../../../types/Ranking';

interface Props {
  playerName: DuoRankingProps['playerName'];
}

const DuoRankingName: ({ playerName }: Props) => JSX.Element = ({ playerName }) => {
  return (
    <div className='flex gap-x-[10px]'>
      <p>{playerName.onePlayer}</p>
      <span>/</span>
      <p>{playerName.twoPlayer}</p>
    </div>
  );
};

export default DuoRankingName;
