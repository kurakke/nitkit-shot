import React from 'react';

import { TitleText } from '../../general/TitleText';

import { ReservationButton } from '../../general/ReservationButton';
const Reservation = (): JSX.Element => {
  return (
    <>
      <TitleText title='information' />
      <div className='mx-auto mt-[20px] flex w-fit flex-col gap-y-[20px]'>
        <ReservationButton
          text='予約はこちらから'
          subText='予約用LINEbotの友達追加を行います'
          backGroundColor='bg-main'
          textColor='text-accent-yellow'
          path=''
          waitTime='15'
        />
      </div>
    </>
  );
};

export default Reservation;
