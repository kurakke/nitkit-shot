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
      className='fixed mx-[15px] mt-[15px] h-[48px] w-auto justify-between rounded-[5px] bg-main pl-[15px] pr-[10.5px] [&>header]:max-w-full [&>header]:px-0'
    >
      <NavbarBrand>
        <Image src={logo} alt={'Logo'} width={120} height={39} />
      </NavbarBrand>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='text-light'
      />
      <NavbarMenu className='ml-auto mr-[15px] w-[291px] gap-y-[40px] overflow-x-hidden rounded-[5px] bg-main-secondary p-[10px]'>
        {Object.values(MENUS_ITEMS).map((menuItems) => (
          <NavbarItem
            key={menuItems.id}
            className={classNames(
              'h-[40px] w-fit items-end border-b-[2px]',
              `${setNavItemStyle(
                menuItems.id,
                'border-accent-yellow', //通常のスタイル
                'mt-[45px] border-accent-green', //reservationのスタイル
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
              <div className='font-menu-english text-[56px] leading-[40px]'>
                {menuItems.englishName}
                <span className='ml-[5px] font-menu-japanese text-[14px] leading-none'>
                  {menuItems.japaneseName}
                </span>
              </div>
            </Link>
          </NavbarItem>
        ))}
        <NavbarBrand className='ml-auto mt-[-10px]'>
          <Image src={logo} alt={'Logo'} width={150} height={54} />
        </NavbarBrand>
      </NavbarMenu>
    </Navbar>
  );
};
