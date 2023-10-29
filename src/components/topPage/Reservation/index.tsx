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
        />
      </div>
    </>
  );
};

export default Reservation;
