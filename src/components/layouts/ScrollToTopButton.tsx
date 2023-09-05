import { Button } from '@nextui-org/react';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import allow from '../../../public/allow.svg';

export const ScrollToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const visibleNumber = 500;

  useEffect(() => {
    const toTopButtonVisibility = () => {
      window.pageYOffset > visibleNumber ? setIsVisible(true) : setIsVisible(false);
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
          'fixed bottom-[78px] right-[15px] h-[48px] w-[48px] min-w-0 rounded-[6px] border border-accent-green bg-accent-yellow transition-opacity duration-300',
          isVisible ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-label='Scroll to top'
      >
        <Image src={allow} alt={'allow'} layout='fill' />
      </Button>
    </>
  );
};
