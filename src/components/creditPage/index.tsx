import React from 'react';

import { HARDWARE_CREDIT, PLUSALPHA_CREDIT, SENSOR_CREDIT, SOFTWARE_CREDIT, WEB_CREDIT } from '../../../constants/credits';

import CreditContents from './CreditContents';

const Credit = (): JSX.Element => {
  return (
    <div className='mt-[20px] font-main text-light'>
      <div className='flex flex-col items-center gap-y-[30px]'>
        <CreditContents affiliation='ソフトウェア班' credit={SOFTWARE_CREDIT} />
        <CreditContents affiliation='ハードウェア班' credit={HARDWARE_CREDIT} />
        <CreditContents affiliation='センサ班' credit={SENSOR_CREDIT} />
        <CreditContents affiliation='web班' credit={WEB_CREDIT} />
        <CreditContents affiliation='＋α班' credit={PLUSALPHA_CREDIT} />
      </div>
    </div>
  );
};

export default Credit;
