import { Button } from '@nextui-org/react';
import classNames from 'classnames';
import { throttle } from 'lodash';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import allow from '../../../public/allow.svg';

export const ScrollToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const visibleHeight: number = 500;

  const toTopButoonState = (): string => {
    return isVisible ? 'translate-x-0' : 'translate-x-[63px]';
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
          'transition-[opacity, visibility] duraction-500 fixed bottom-[78px] right-[15px] h-[48px] w-[48px] min-w-0 rounded-[6px] border border-accent-green bg-accent-yellow',
          toTopButoonState(),
        )}
        aria-label='Scroll to top'
      >
        <Image src={allow} alt={'allow'} layout='fill' />
      </Button>
    </>
  );
};
