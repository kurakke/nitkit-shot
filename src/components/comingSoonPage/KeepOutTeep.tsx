import { throttle } from 'lodash';
import React, { useEffect, useState } from 'react';

interface Props {
  rotate: string;
}

const KeepOutTeep: ({ rotate }: Props) => JSX.Element = ({ rotate }) => {
  const [wordCount, setWordCount] = useState<number>(0);

  //パソコンで見られることを想定し、画面幅が変わったときのための処理、パフォーマンスを考えるとなくてもいい
  useEffect(() => {
    const getWordCount = throttle(() => {
      const wordCountState: number = window.innerWidth / 80;
      if (wordCount !== wordCountState) {
        setWordCount(wordCountState);
      }
    }, 800);
    window.addEventListener('resize', getWordCount);
    getWordCount();
    return () => window.removeEventListener('resize', getWordCount);
  }, [wordCount]);

  return (
    <div
      className={`shadow-keep-out-teep flex h-[22px] justify-center gap-x-[40px] whitespace-pre bg-accent-yellow ${rotate}`}
    >
      {Array.from({ length: wordCount }).map((index) => (
        <p key={index as number} className='font-ranking text-[16px]'>
          keep out
        </p>
      ))}
    </div>
  );
};

export default KeepOutTeep;
