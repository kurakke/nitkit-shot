interface SentenceProps {
  id: string;
  lines: string[];
}

export type Sentence = Record<string, SentenceProps>;
