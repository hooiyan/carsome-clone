import { Flex, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { MENU_ABOUT, MENU_DEALERS, MENU_FINANCING } from '../../constants/menu';
import DesktopHeaderDropdown from './DesktopHeaderDropdown';
import DesktopHeaderDropdownSpecial from './DesktopHeaderDropdownSpecial';
import DesktopHeaderPlainMenu from './DesktopHeaderPlainMenu';
import DesktopHeaderRight from './DesktopHeaderRight';
import Logo from './Logo';

function DesktopHeader() {
  return (
    <Flex
      as='header'
      alignItems='center'
      display={['none', 'none', 'none', 'none', 'flex']}
      shadow='md'
      justifyContent='space-between'
      padding={4}
      w='100%'
    >
      <Flex alignItems='center' gap={10} pl={10} w='90%'>
        <Logo />
        <Flex as='nav' gap={4}>
          <DesktopHeaderDropdownSpecial />
          <DesktopHeaderPlainMenu title='Sell Car' />
          <DesktopHeaderDropdown title='Financing'>
            {MENU_FINANCING.map((menu) => {
              return (
                <MenuItem key={menu.id} textTransform='capitalize'>
                  {menu.name}
                </MenuItem>
              );
            })}
          </DesktopHeaderDropdown>
          <DesktopHeaderPlainMenu title='FAQ' />
          <DesktopHeaderDropdown title='About Carsome'>
            {MENU_ABOUT.map((menu) => {
              return (
                <MenuItem key={menu.id} textTransform='capitalize'>
                  {menu.name}
                </MenuItem>
              );
            })}
          </DesktopHeaderDropdown>
          <DesktopHeaderDropdown title='Dealers'>
            {MENU_DEALERS.map((menu) => {
              return (
                <MenuItem key={menu.id} textTransform='capitalize'>
                  {menu.name}
                </MenuItem>
              );
            })}
          </DesktopHeaderDropdown>
        </Flex>
      </Flex>
      <DesktopHeaderRight />
    </Flex>
  );
}

export default DesktopHeader;
