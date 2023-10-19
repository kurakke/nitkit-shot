interface QAndAProps {
  id: string;
  question: string;
  answer: string;
  type?: 'video' | 'picture';
  source?: string;
  title?: string;
}

export type QAndA = Record<string, QAndAProps>;
