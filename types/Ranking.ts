export interface DuoRankingInformation {
  itemName: {
    onePlayer: string;
    twoPlayer: string;
  };
  clearTime: string;
  headShot: {
    onePlayer: string;
    twoPlayer: string;
  };
  hitRate: {
    onePlayer: string;
    twoPlayer: string;
  };
  bulletUsed: {
    onePlayer: string;
    twoPlayer: string;
  };
  damage: {
    onePlayer: string;
    twoPlayer: string;
  };
  kill: {
    onePlayer: string;
    twoPlayer: string;
  };
}

export interface SoloRankingInformation {
  itemName: string;
  clearTime: string;
  headShot: string;
  hitRate: string;
  bulletUsed: string;
  damage: string;
  kill: string;
}

export interface SoloRankingProps {
  playerName: string;
  ranking: string;
  score: string;
  information: SoloRankingInformation;
}

export interface DuoRankingProps {
  playerName: {
    onePlayer: string;
    twoPlayer: string;
  };
  ranking: string;
  score: string;
  information: DuoRankingInformation;
}

export type SoloRanking = Record<string, SoloRankingProps>;
export type DuoRanking = Record<string, DuoRankingProps>;
