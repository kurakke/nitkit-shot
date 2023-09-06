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
    {
      date: '2021/10/10',
      text: 'kurakke',
    },
    {
      date: '2021/10/10',
      text: 'kurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakkekurakke',
    },
  ];
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex h-[150px] w-[380px] flex-col items-center overflow-y-auto rounded border-2 border-accent-yellow pl-[4px] pt-[4px]'>
          {informationText.map((text) => (
            <div className='flex w-full whitespace-pre' key={text.date}>
              <p className='font-main text-sm text-accent-yellow'>{text.date}</p>
              <p className='ml-[8px] w-[280px] whitespace-pre-wrap break-words font-sub text-sm text-black'>
                {text.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
