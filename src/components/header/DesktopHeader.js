import { Flex, MenuItem, Text } from '@chakra-ui/react';
import React from 'react';
import DropdownMenu from './DropdownMenu';
import PlainMenu from './PlainMenu';
import SpecialDropdownMenu from './SpecialDropdownMenu';

function DesktopHeader() {
  return (
    <Flex as='header' alignItems='center'>
      <Flex alignItems='center' gap={10}>
        <Text fontWeight='bold' textTransform='uppercase'>BikeSome</Text>
        <Flex as='nav' gap={3}>
          <SpecialDropdownMenu />
          <PlainMenu title='Sell Car' />
          <DropdownMenu title='Financing'>
            <MenuItem>Car Loan</MenuItem>
            <MenuItem>Car Insurance</MenuItem>
          </DropdownMenu>
          <PlainMenu title='FAQ' />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DesktopHeader;
