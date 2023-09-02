import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

import { MENUS_ITEMS } from '../../../constants/menuItems';

export const HeaderBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='bg-main rounded-[5px] w-[93vw] mx-auto mt-[15px] mb-[50px] justify-between [&>header]:max-w-full'
    >
      <NavbarBrand className='h-[39px]'>
        <Image src='/logo.svg' width={150} height={39} />
      </NavbarBrand>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='text-light'
      />
      <NavbarMenu className='group bg-main-secondary w-[291px] mt-[30px] ml-auto mr-[3.5vw] rounded-[5px] h-[900px] mb-[200px] p-[10px] gap-y-[40px] '>
        {Object.values(MENUS_ITEMS).map((menuItems) => (
          <NavbarItem key={menuItems.id} className='last:mt-[110px]'>
            <Link
              href={menuItems.path}
              className='text-accent-yellow h-[40px] border-b-[2px] border-accent-yellow'
            >
              <p className='text-[56px] font-menu-english leading-10'>
                {menuItems.engkishName}
                <span className='text-[14px] font-menu-japanese ml-[5px] leading-none'>
                  {menuItems.japaneseName}
                </span>
              </p>
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem className='last:mt-[110px] items-end flex-col flex'>
          <Link href='/' className='text-accent-green border-b-[2px] border-accent-green h-[40px]'>
            <p className='text-[56px] font-menu-english'>
              Reservation
              <span className='text-[14px] font-menu-japanese ml-[5px]'>予約用LINEbotへ</span>
            </p>
          </Link>
          <NavbarBrand className='h-[39px] mt-[30px]'>
            <Image src='/logo.svg' width={150} height={39} />
          </NavbarBrand>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
