import { Flex, MenuItem, Text } from '@chakra-ui/react';
import React from 'react';
import DesktopHeaderRight from './DesktopHeaderRight';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import PlainMenu from './PlainMenu';
import SpecialDropdownMenu from './SpecialDropdownMenu';

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
          <SpecialDropdownMenu />
          <PlainMenu title='Sell Car' />
          <DropdownMenu title='Financing'>
            <MenuItem>Car Loan</MenuItem>
            <MenuItem>Car Insurance</MenuItem>
          </DropdownMenu>
          <PlainMenu title='FAQ' />
          <DropdownMenu title='About Carsome'>
            <MenuItem>Our Story</MenuItem>
            <MenuItem>Carsome Certified Lab</MenuItem>
            <MenuItem>Buying from Carsome</MenuItem>
            <MenuItem>Quality Assured Cars</MenuItem>
            <MenuItem>Carsome Capital</MenuItem>
            <MenuItem>Articles</MenuItem>
            <MenuItem>News</MenuItem>
            <MenuItem>Contact Us</MenuItem>
            <MenuItem>Locate Us</MenuItem>
          </DropdownMenu>
          <DropdownMenu title='Dealers'>
            <MenuItem>Dealer Sign Up</MenuItem>
            <MenuItem>Dealer Login</MenuItem>
          </DropdownMenu>
        </Flex>
      </Flex>
      <DesktopHeaderRight />
    </Flex>
  );
}

export default DesktopHeader;
