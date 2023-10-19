interface QandAProps {
  id: string;
  question: string;
  answer: string;
  type?: 'video' | 'picture';
  source?: string;
  title?: string;
}

export type QandA = Record<string, QandAProps>;
