import React from 'react';

import { Sentence } from '../../../types/Sentence';

interface Props {
  sentence: Sentence;
  leading?: string;
  gap?: string;
  textSize: string;
  point: boolean;
}

const SentenceGenerater: ({ gap, leading, sentence, textSize }: Props) => JSX.Element = ({
  gap,
  leading,
  point,
  sentence,
  textSize,
}) => {
  const pointStyle = () => {
    point ? 'list-disc' : '';
  };
  return (
    <ul className={(`grid font-main ${gap} ${textSize} ${leading} text-light`, `${pointStyle()}`)}>
      {Object.values(sentence).map((paragraphs) => (
        <li key={paragraphs.id}>
          {Object.values(paragraphs.lines).map((texts) => (
            <p key={texts}>{texts}</p>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default SentenceGenerater;
