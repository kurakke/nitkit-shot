import React from 'react';

import { RedirectButton } from '../general/RedirectButton';
import { TitleText } from '../general/TitleText';

const ClosedReservation = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center gap-y-[25px]'>
      <TitleText title='official line' />
      <p className='text-center font-sub text-[20px] text-light'>
        予約受付は終了しました。
        <br />
        ありがとうございました！
      </p>
      <RedirectButton
        path=''
        text='ページトップへ'
        backGroundColor='bg-accent-yellow'
        textColor='text-main'
      />
    </div>
  );
};

export default ClosedReservation;
