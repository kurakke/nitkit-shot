import { Sentence } from "./Sentence";

interface QandAProps {
  question: Sentence;
  answer: Sentence;
}

export type QandA =Record<string, QandAProps>;
