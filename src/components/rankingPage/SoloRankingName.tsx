import { SoloRankingProps } from '../../../types/Ranking';

interface Props {
  playerName: SoloRankingProps['playerName'];
}

const SoloRankingName: ({ playerName }: Props) => JSX.Element = ({ playerName }) => {
  return <p>{playerName}</p>;
};

export default SoloRankingName;
