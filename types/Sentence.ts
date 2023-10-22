interface SentenceProps {
  id: string;
  sentence: string;
}

export type Sentence = Record<string, SentenceProps>;
