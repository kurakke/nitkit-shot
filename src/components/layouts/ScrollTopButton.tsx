import { Transition } from '@headlessui/react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import allow from '../../../public/allow.svg';

export const ScrollTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <>
      <Transition show={isVisible} leave='transition-opacity duration-300'>
        <Button
          onClick={scrollToTop}
          className='fixed w-[48px] h-[48px] bottom-[15px] right-[15px] min-w-0 bg-accent-yellow border border-accent-green rounded-[6px]'
          aria-label='Scroll to top'
        >
          <Image src={allow} alt={'allow'} layout='fill' />
        </Button>
      </Transition>
    </>
  );
};
