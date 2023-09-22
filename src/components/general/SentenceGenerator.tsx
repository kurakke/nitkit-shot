import classNames from 'classnames';
import React from 'react';

import { Sentence } from '../../../types/Sentence';

interface Props {
  sentence: Sentence;
  leading?: string;
  gap?: string;
  textSize: string;
  point: boolean;
}

const SentenceGenerator: ({ gap, leading, point, sentence, textSize }: Props) => JSX.Element = ({
  gap,
  leading,
  point,
  sentence,
  textSize,
}) => {
  const pointStyle = () => {
    return point ? 'list-disc' : '';
  };
  return (
    <ul
      className={classNames(
        `grid font-main text-light`,
        `${gap}`,
        `${textSize}`,
        `${leading}`,
        `${pointStyle()}`,
      )}
    >
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

export default SentenceGenerator;
