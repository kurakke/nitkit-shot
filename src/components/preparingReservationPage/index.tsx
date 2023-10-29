import React from 'react';

import { RedirectButton } from '../general/RedirectButton';
import { TitleText } from '../general/TitleText';

const PreparingReservation = (): JSX.Element => {
    return (
        <div className='flex flex-col items-center gap-y-[25px]'>
            <TitleText title="coming soon" />
            <p className='text-center text-[20px] text-accent-green font-sub'>間もなく、案内を開始いたします。<br />いましばらくお待ちください。</p>
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
