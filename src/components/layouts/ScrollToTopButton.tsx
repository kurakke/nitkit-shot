import { Button } from '@nextui-org/react';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import allow from '../../../public/allow.svg';

export const ScrollToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toTopButtonVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toTopButtonVisibility);

    return () => window.removeEventListener('scroll', toTopButtonVisibility);
  }, []);

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
          'fixed w-[48px] h-[48px] bottom-[35px] right-[15px] min-w-0 bg-accent-yellow border border-accent-green rounded-[6px] transition-opacity duration-300',
          isVisible ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-label='Scroll to top'
      >
        <Image src={allow} alt={'allow'} layout='fill' />
      </Button>
    </>
  );
};
