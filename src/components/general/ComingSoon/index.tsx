import React from 'react';

import ComingSoonTape from './ComingSoonTape';

const COMING_SOON_TAPE_ROTATE: string[] = [
  'rotate-[-7.413deg]',
  'rotate-[15.461deg]',
  'rotate-[-14.036deg]',
  'rotate-[9.976deg]',
  'rotate-[27.996deg]',
  'rotate-[-9.445deg]',
  'rotate-[27.996deg]',
  'rotate-[-26.881deg]',
  'rotate-[8.774deg]',
  'rotate-[-8.678deg]',
];

const ComingSoon = (): JSX.Element => {
  return (
    <div className='mx-auto mb-[13.5%] flex h-screen w-[calc(100vw-30px)] flex-col items-center justify-evenly'>
      {COMING_SOON_TAPE_ROTATE.map((tapeRotate, index) => (
        <ComingSoonTape key={index} rotate={tapeRotate} />
      ))}
    </div>
  );
};

export default ComingSoon;
