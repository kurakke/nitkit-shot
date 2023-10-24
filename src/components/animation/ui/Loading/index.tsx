import classNames from 'classnames';
import Image from 'next/image';

import logo from '../../../../../public/logo.svg';
import { useIntersectionOnce } from '../../hooks/useIntersectionOnce';

const Loading = () => {
  const { isIntersected, ref } = useIntersectionOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={classNames(
        `fixed z-50 flex h-full w-full items-center justify-center bg-main`,
        `transition-all delay-[1500ms] duration-300 ease-in-out ${
          isIntersected ? 'invisible opacity-0' : 'visible opacity-100'
        }`,
      )}
    >
      <div
        className={classNames(
          `relative h-[153.5px] w-[430px]`,
          `transition-opacity delay-300 ${isIntersected ? 'opacity-100' : 'opacity-0'}`,
        )}
      >
        <Image src={logo} alt={logo} fill />
      </div>
    </div>
  );
};

export default Loading;
