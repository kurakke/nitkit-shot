interface CreditProps {
  id: number;
  post: string;
  name: string;
}

export type Credit = Record<number, CreditProps>;
