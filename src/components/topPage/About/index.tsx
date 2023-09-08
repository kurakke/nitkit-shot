import { Button } from '@nextui-org/react';
import Image from 'next/image';

import allow from '../../../../public/allow.svg';
import { TitleText } from '../../TitleText';

export const About = (): JSX.Element => {
  return (
    <div>
      <TitleText title='about' />
      <div className='mx-auto mt-[10px] w-fit border-b border-accent-yellow text-center text-[20px] leading-none text-accent-yellow'>
        迫り来るゾンビを撃て！
      </div>
      <ul className='mt-[20px] grid gap-y-[20px] text-center font-main text-[16px] leading-[30px] text-light'>
        <li>
          <p>ある日突然北九州高専に</p>
          <p>現れたゾンビたち！！！！！！！！</p>
        </li>
        <li>
          <p>その正体は高専生と先生であった!?</p>
        </li>
        <li>
          <p>ゾンビを元の姿に戻すため4号館の奥へと歩み</p>
          <p>進めていくのだが……</p>
        </li>
        <li>
          <p>4I完全自作の</p>
          <p>ハチャメチャゾンビシューティング！！！！</p>
        </li>
      </ul>
      <div className=' mt-[20px] flex flex-col gap-y-[20px]'>
        <Button className='mx-auto h-[54px] w-[230px] bg-accent-green p-0'>
          <div className='font-sub text-[20px] font-semibold text-main'>もっと詳しく</div>
          <div>
            <Image className='rotate-90' src={allow} alt={'allow'} width={36} height={36} />
          </div>
        </Button>
        <Button className='h-[54px] w-[230px] justify-end bg-accent-yellow p-0'>
          <div>
            <div className=' mr-[12px] font-sub text-[20px] font-semibold text-main'>
              プレイする人へ
            </div>
          </div>
          <div>
            <Image className=' rotate-90' src={allow} alt={'allow'} width={36} height={36} />
          </div>
        </Button>
        <Button className='inline-flex h-[108px] w-[330px] bg-accent-yellow p-0'>
          <div className='mr-[12px] items-center font-menu-japanese leading-none'>
            <div className=' font-sub text-[24px] font-bold text-main'>予約はこちらから</div>
            <div className='mt-[2px] text-[12px]'>予約用LINEbotの友達追加を行います</div>
          </div>
          <Image className=' rotate-90' src={allow} alt={'allow'} width={36} height={36} />
        </Button>
      </div>
      <ul className='mt-[20px] grid gap-y-[20px] text-center font-main text-[16px] leading-[30px] text-light'>
        <li>
          <p>P.S.</p>
        </li>
        <li>
          <p>QRコードを読み取ってからプレイするといいことがあるかも…?</p>
        </li>
      </ul>
    </div>
  );
};
