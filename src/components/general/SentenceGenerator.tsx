import classNames from 'classnames';
import React from 'react';

interface Props {
  sentence: string[];
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
      {sentence.map((paragraphs, index) => (
        <li key={index} className='whitespace-pre-wrap'>
          {paragraphs}
        </li>
      ))}
    </ul>
  );
};

export default SentenceGenerator;
