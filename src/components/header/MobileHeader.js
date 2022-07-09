import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import MobileDrawer from './MobileDrawer';
import MobileHeaderRight from './MobileHeaderRight';

function MobileHeader() {
  return (
    <Flex
      display={['flex', 'flex', 'flex', 'flex', 'none']}
      justifyContent='space-between'
      px={4}
      py={3}
    >
      <HStack alignItems='center'>
        <MobileDrawer />
        <Logo />
      </HStack>
      <MobileHeaderRight />
    </Flex>
  );
}

export default MobileHeader;
