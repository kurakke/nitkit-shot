import React from 'react';

import { RedirectButton } from '../general/RedirectButton';
import { TitleText } from '../general/TitleText';

const PreparingReservation = (): JSX.Element => {
    return (
        <div className='flex flex-col items-center gap-y-[25px]'>
            <TitleText title="official line" />
            <p className='text-center text-[20px] text-light font-sub'>公式Lineは準備中です。<br />お待ちください。</p>
            <RedirectButton
                path=''
                text='ページトップへ'
                backGroundColor='bg-accent-yellow'
                textColor='text-main'
            />
        </div>
    );
};

export default PreparingReservation;
