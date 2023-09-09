import React, { use, useState } from 'react';

export const SamplePage = () => {
  const [counter, setCounter] = useState<number>(0);
  const addCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const decCounter = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <div className='bg-orange-300'>kurakke sample</div>
      {counter}
      <div onClick={addCounter}>countup</div>
      <div onClick={decCounter}>countdown</div>
    </>
  );
};
