interface RankingProps {
  name: string;
  ranking: string;
  score: string;
}

type RankingInformation = Record<string, RankingProps>;

export default RankingInformation;
