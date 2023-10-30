import React from 'react';

import { HARDWARE_CREDIT, PLUSALPHA_CREDIT, SENSOR_CREDIT, SOFTWARE_CREDIT, WEB_CREDIT } from '../../../constants/credits';
import ScrollRevealOnce from '../animation/ui/ScrollRevealOnce';

import CreditContents from './CreditContents';

const Credit = (): JSX.Element => {
  const creditContents = [
    {
      affiliation: 'ソフトウェア班',
      credit: SOFTWARE_CREDIT,
    },
    {
      affiliation: 'ハードウェア班',
      credit: HARDWARE_CREDIT,
    },
    {
      affiliation: 'センサ班',
      credit: SENSOR_CREDIT,
    },
    {
      affiliation: 'web班',
      credit: WEB_CREDIT,
    },
    {
      affiliation: '＋α班',
      credit: PLUSALPHA_CREDIT,
    },
  ]
  return (
    <div className='mt-[20px] font-main text-light'>
      <div className='flex flex-col items-center gap-y-[30px]'>
        {creditContents.map((creditContent, index) => (
          <ScrollRevealOnce>
            <CreditContents
            affiliation={creditContent.affiliation}
            credit={creditContent.credit}
            key={index}
          />
          </ScrollRevealOnce>
        ))}
      </div>
    </div>
  );
};

export default Credit;
