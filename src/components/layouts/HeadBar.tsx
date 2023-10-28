import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { MENUS_ITEMS } from '../../../constants/menuItems';
import logo from '../../../public/logo.svg';
import { PageId } from '../../../types/PageId';

export const HeaderBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const setNavItemStyle = (pageId: PageId, regular: string, reservation: string): string => {
    return pageId === 'reservation' ? reservation : regular;
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='fixed mx-[15px] mt-[15px] h-[48px] w-auto justify-between rounded-[5px] bg-main pl-[15px] pr-[10.5px] shadow-header [&>header]:max-w-full [&>header]:px-0'
    >
      <NavbarBrand>
        <Link href='/'>
          <Image src={logo} alt={'Logo'} width={120} height={39} />
        </Link>
      </NavbarBrand>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='text-light'
      />
      <NavbarMenu className='mb-auto ml-auto mr-[15px] mt-[15px] max-h-[604px] w-fit gap-y-[18px] overflow-auto overscroll-y-contain rounded-[5px] bg-main-secondary px-[15px] py-[10px] shadow-xl'>
        {Object.values(MENUS_ITEMS).map((menuItems) => (
          <NavbarItem
            key={menuItems.id}
            className={classNames(
              'h-[40px] w-fit items-end border-b-[2px]',
              `${setNavItemStyle(
                menuItems.id,
                'border-accent-yellow', //通常のスタイル
                'mt-[42px] border-accent-green', //reservationのスタイル
              )}`,
            )}
          >
            <Link
              href={menuItems.path}
              className={`${setNavItemStyle(
                menuItems.id,
                'text-accent-yellow', //通常のスタイル
                'text-accent-green', //reservationのスタイル
              )}`}
            >
              <div className='font-menu-english text-[48px] leading-[44px]'>
                {menuItems.englishName}
                <span className='ml-[4px] font-menu-japanese text-[12px] leading-none'>
                  {menuItems.japaneseName}
                </span>
              </div>
            </Link>
          </NavbarItem>
        ))}
        <NavbarBrand className='ml-auto flex-grow-0'>
          <Image src={logo} alt={'Logo'} width={200} height={72} />
        </NavbarBrand>
      </NavbarMenu>
    </Navbar>
  );
};
