import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

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

  // トップにスクロールする関数
  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <>
      <Transition
        show={isVisible}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full focus:outline-none focus:bg-blue-600 hover:bg-blue-600'
          aria-label='Scroll to top'
        >
          ↑
        </button>
      </Transition>
    </>
  );
};
