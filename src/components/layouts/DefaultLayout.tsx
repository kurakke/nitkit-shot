import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react';
import classNames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { MENUS_ITEMS } from '../../../constants/menuItems';
import allow from '../../../public/allow.svg';
import logo from '../../../public/logo.svg';
import { LayoutProps } from '../../../types/LayoutProps';

export const DefaultLayout: ({ children }: LayoutProps) => JSX.Element = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toTopButtonVisibility = () => {
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
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
      <body className='bg-accent-green'>
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className='fixed mx-[15px] mt-[15px] h-[48px] w-auto justify-between rounded-[5px] bg-main pl-[15px] pr-[10.5px] [&>header]:max-w-full [&>header]:px-0'
        >
          <NavbarBrand>
            <Image src={logo} alt={'Logo'} width={120} height={39} />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='text-light'
          />
          <NavbarMenu className='ml-auto mr-[15px] w-[291px] gap-y-[40px] rounded-[5px] bg-main-secondary p-[10px]'>
            {Object.values(MENUS_ITEMS).map((menuItems) => (
              <NavbarItem
                key={menuItems.id}
                className={classNames(
                  'h-[40px] w-fit items-end border-b-[2px]',
                  menuItems.id === 'reservation'
                    ? 'mt-[45px] border-accent-green'
                    : 'border-accent-yellow',
                )}
              >
                <Link
                  href={menuItems.path}
                  className={classNames(
                    menuItems.id === 'reservation' ? 'text-accent-green' : 'text-accent-yellow',
                  )}
                >
                  <p className='font-menu-english text-[56px] leading-[40px]'>
                    {menuItems.englishName}
                    <span className='ml-[5px] font-menu-japanese text-[14px] leading-none'>
                      {menuItems.japaneseName}
                    </span>
                  </p>
                </Link>
              </NavbarItem>
            ))}
            <NavbarBrand className='ml-auto mt-[-10px]'>
              <Image src={logo} alt={'Logo'} width={150} height={54} />
            </NavbarBrand>
          </NavbarMenu>
        </Navbar>
        <main className='mt-[110px] w-full'>
          <Button
            onClick={scrollToTop}
            className={classNames(
              'fixed bottom-[90px] right-[15px] h-[48px] w-[48px] min-w-0 rounded-[6px] border border-accent-green bg-accent-yellow transition-opacity duration-300',
              isVisible ? 'visible opacity-100' : 'invisible opacity-0',
            )}
            aria-label='Scroll to top'
          >
            <Image src={allow} alt={'allow'} layout='fill' />
          </Button>
          {children}
        </main>
        <div className='m-[15px] flex h-[48px] items-center justify-between rounded-[5px] bg-main pl-[15px] pr-[5px]'>
          <Image src={logo} alt={'Logo'} height={44} width={120} />
          <div className='mb-[5px] mt-auto text-[10px] text-white'>@ 2023 NitKit 4I.</div>
        </div>
      </body>
    </>
  );
};
