import React from 'react';

import { ReservationButton } from '../../general/ReservationButton';
import { TitleText } from '../../general/TitleText';

const Reservation = (): JSX.Element => {
  return (
    <>
      <TitleText title='reservation' />
      <div className='mx-auto mt-[20px] flex w-fit flex-col gap-y-[20px]'>
        <ReservationButton
          path='preparingreservation' //ここにLINEbotへのリンクを貼る
          waitTime='15' //ここに待ち時間の方を定義する
        />
      </div>
    </>
  );
};

export default Reservation;
