type Size = 'regular' | 'large';

interface Props {
  size: Size;
  text: string;
  subtext?: string;
  backGroundColor: string;
  textColor: string;
}

export const RedirectButton = ({ backGroundColor, size, subtext, textColor, text }: Props) =>
  JSX.Element = ({ backGroundColor, size, subtitle, textColor, title }) => {
    
    return (
        <Button className='inline-flex h-[108px] w-[330px] bg-accent-yellow p-0'>
          <div className='mr-[12px] items-center font-menu-japanese leading-none'>
            <div className=' font-sub text-[24px] font-bold text-main'>{text}</div>
            <div className='mt-[2px] text-[12px]'>{subtext}</div>
          </div>
          <Image className=' rotate-90' src={allow} alt={'allow'} width={36} height={36} />
        </Button>
      </div>
    );
  };
