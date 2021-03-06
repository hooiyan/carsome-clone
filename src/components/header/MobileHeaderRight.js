import { HStack, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { IoPersonCircle } from 'react-icons/io5';

function MobileHeaderRight() {
  return (
    <HStack spacing={6}>
      <Link _hover={{ textDecor: 'none' }}>Buy</Link>
      <Link _hover={{ textDecor: 'none' }}>Sell</Link>
      <Icon as={IoPersonCircle} h={6} w={6} />
    </HStack>
  );
}

export default MobileHeaderRight;
