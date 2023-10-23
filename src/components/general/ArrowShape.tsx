import classNames from 'classnames';

interface Props {
  direction: 'top' | 'right' | 'bottom' | 'left';
  color: string;
}

const ArrowShape: ({ direction, color }: Props) => JSX.Element = ({ direction, color }) => {
  const arrowDirection = () => {
    switch (direction) {
      case 'top':
        return 'rotate-[-45deg]';
      case 'right':
        return 'rotate-45';
      case 'bottom':
        return 'rotate-[135deg]';
      case 'left':
        return 'rotate-[-135deg]';
    }
  };

  return (
    <div
      className={classNames(
        `relative flex h-[15px] w-[15px] justify-center [&>div]:absolute [&>div]:h-[3px] [&>div]:w-[15px] [&>div]:rounded-[2px]`,
        `${arrowDirection()}`,
      )}
    >
      <div className={classNames(`${color}`)} />
      <div className={`right-[3px] origin-top-right rotate-[-90deg] ${color}`} />
    </div>
  );
};

export default ArrowShape;
