import { Button } from '@nextui-org/react';
import classNames from 'classnames';
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

import AllowShape from '../general/AllowShape';

export const ScrollToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const visibleHeight: number = 500;

  const toTopButoonStyle = (visible: string, inVisible: string): string => {
    return isVisible ? visible : inVisible;
  };

  useEffect(() => {
    const toTopButtonVisibility = throttle(() => {
      const visibilityState: boolean = window.pageYOffset > visibleHeight;
      if (isVisible !== visibilityState) {
        setIsVisible(visibilityState);
      }
    }, 200);

    window.addEventListener('scroll', toTopButtonVisibility);

    return () => window.removeEventListener('scroll', toTopButtonVisibility);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <>
      <Button
        onClick={scrollToTop}
        className={classNames(
          'transition-[opacity, visibility] duraction-500 fixed bottom-[78px] right-[15px] flex h-[48px] w-[48px] min-w-0 items-center justify-center rounded-[6px] border border-accent-green bg-accent-yellow',
          `${toTopButoonStyle(
            'translate-x-0', //表示時のスタイル
            'translate-x-[63px]', //非表示時のスタイル
          )}`,
        )}
        aria-label='Scroll to top'
      >
        <div className='mt-[7.5px]'>
          <AllowShape direction='top' />
        </div>
      </Button>
    </>
  );
};
