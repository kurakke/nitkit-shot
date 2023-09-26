import classNames from 'classnames';

interface Props {
  direction: 'top' | 'right' | 'bottom' | 'left';
}

const AllowShape: ({ direction }: Props) => JSX.Element = ({ direction }) => {
  const allowDirection = () => {
    switch (direction) {
      case 'top':
        return 'rotate-[-45deg]';
      case 'right':
        return 'rotate-0';
      case 'bottom':
        return 'rotate-[135deg]';
      case 'left':
        return 'rotate-[-135deg]';
    }
  };

  return (
    <div
      className={classNames(
        `relative flex h-[15px] w-[15px] rotate-45 justify-center [&>div]:absolute [&>div]:h-[3px] [&>div]:w-[15px] [&>div]:rounded-[2px] [&>div]:bg-main`,
        `${allowDirection()}`,
      )}
    >
      <div />
      <div className='right-[3px] origin-top-right rotate-[-90deg]' />
    </div>
  );
};

export default AllowShape;
