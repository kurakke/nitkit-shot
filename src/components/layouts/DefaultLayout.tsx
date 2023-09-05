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
      <body className='bg-accent-green h-max'>
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className='fixed justify-between mx-[15px] mt-[15px] pr-[10.5px] pl-[15px] w-auto h-[48px] rounded-[5px] bg-main [&>header]:max-w-full [&>header]:px-0'
        >
          <NavbarBrand>
            <Image src={logo} alt={'Logo'} width={120} height={39} />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='text-light'
          />
          <NavbarMenu className='ml-auto mr-[15px] p-[10px] gap-y-[40px] w-[291px] rounded-[5px] bg-main-secondary'>
            {Object.values(MENUS_ITEMS).map((menuItems) => (
              <NavbarItem
                key={menuItems.id}
                className={classNames(
                  'items-end w-fit h-[40px] border-b-[2px]',
                  menuItems.id === 'reservation'
                    ? 'border-accent-green mt-[80px]'
                    : 'border-accent-yellow',
                )}
              >
                <Link
                  href={menuItems.path}
                  className={classNames(
                    menuItems.id === 'reservation' ? 'text-accent-green' : 'text-accent-yellow',
                  )}
                >
                  <p className='text-[56px] font-menu-english leading-[40px]'>
                    {menuItems.englishName}
                    <span className='text-[14px] font-menu-japanese ml-[5px] leading-none'>
                      {menuItems.japaneseName}
                    </span>
                  </p>
                </Link>
              </NavbarItem>
            ))}
            <NavbarBrand className='mt-[-10px] ml-auto'>
              <Image src={logo} alt={'Logo'} width={150} height={54} />
            </NavbarBrand>
          </NavbarMenu>
        </Navbar>
        <main className='w-full mt-[110px]'>
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
          {children}
        </main>
        <div className='m-[15px] bg-main h-[48px] pl-[15px] flex justify-between items-center rounded-[5px] pr-[4px]'>
          <Image src={logo} alt={'Logo'} height={44} width={120} />
          <div className='mt-[25px] text-[10px] text-white'>@ 2023 NitKit 4I.</div>
        </div>
      </body>
    </>
  );
};
