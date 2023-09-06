import React from 'react';

const Information = (): JSX.Element => {
  type InformationText = {
    date: string;
    text: string;
  };
  const informationText: InformationText[] = [
    {
      date: '2021/10/10',
      text: 'kurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakke',
    },
    {
      date: '2021/10/10',
      text: 'kurakke',
    },
  ];
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex h-[150px] w-[380px] flex-col items-center rounded border-2 border-accent-yellow'>
          {informationText.map((text) => (
            <div className='flex whitespace-pre' key={text.date}>
              <p>{text.date}</p>
              <p className='ml-[5px] w-[280px] whitespace-pre-wrap break-words'>{text.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
