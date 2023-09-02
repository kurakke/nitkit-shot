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
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className='bg-[#014A2E] justify-start w-screen fixed'
    >
      <NavbarBrand>
        <Image src='/logo.svg' alt='logo' width={150} height={75} />
      </NavbarBrand>
      <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      <NavbarMenu>
        {Object.values(MENUS_ITEMS).map((menuItems) => (
          <NavbarItem key={menuItems.id}>
            <Link href={menuItems.path} className='text-[#014A2E]'>
              <p>{menuItems.japaneseName}</p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
