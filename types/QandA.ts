import { Sentence } from "./Sentence";

interface QandAProps {
  question: Sentence;
  answer: Sentence;
  type?: 'video' | 'picture';
}

export type QandA =Record<string, QandAProps>;
