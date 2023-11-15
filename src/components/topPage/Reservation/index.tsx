import React, { useEffect, useState } from 'react';

import { ReservationButton } from '../../general/ReservationButton';
import { TitleText } from '../../general/TitleText';

const Reservation = (): JSX.Element => {
  const [waitingTime, setWaitingTime] = useState<number | null | undefined>(null);

  useEffect(() => {
    const getWaitTime = async () => {
      try {
        const res = await fetch('api/waitingTime');
        const data = await res.json();
        setWaitingTime(data.waitingTime);
      } catch (err) {
        console.log(err);
      }
    };
    getWaitTime();
  });

  return (
    <>
      <TitleText title='reservation' />
      <div className='mx-auto mt-[20px] flex w-fit md:pb-[20px]'>
        <ReservationButton path='closedreservation' waitingTime={waitingTime as number} />
      </div>
    </>
  );
};

export default Reservation;
