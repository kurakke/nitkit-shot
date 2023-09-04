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

export const HeaderBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className='w-screen h-screen'>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className='fixed justify-between mx-[15px] mt-[15px] pr-[10.5px] pl-[15px] w-auto h-[48px] rounded-[5px] bg-main [&>header]:max-w-full [&>header]:px-0'
      >
        <NavbarBrand>
          <Image src={'/logo.svg'} alt={'Logo'} width={120} height={39} />
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
            <Image src={'/logo.svg'} alt={'Logo'} width={150} height={54} />
          </NavbarBrand>
        </NavbarMenu>
      </Navbar>
      <main className='mt-[100px]'>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
        <div>kurakke</div>
      </main>
    </div>
  );
};
