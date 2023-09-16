import React from 'react';

import { Sentence } from '../../../types/Sentence';

interface Props {
  sentence: Sentence;
  leading: string;
  gap: string;
  textSize: string;
}

const SentenceGenerater: ({ gap, leading, sentence, textSize }: Props) => JSX.Element = ({
  gap,
  leading,
  sentence,
  textSize,
}) => {
  return (
    <ul className={`grid font-main ${gap} ${textSize} ${leading} text-light`}>
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
