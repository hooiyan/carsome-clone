import { HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import HotlineNumber from './HotlineNumber';

function DesktopHeaderRight() {
  return (
    <HStack spacing={10} w='30%'>
      <HotlineNumber />
      <HStack>
        <Icon as={IoPersonCircle} h={6} w={6} />
        <Text fontWeight='bold'>Sign Up/Login</Text>
      </HStack>
    </HStack>
  );
}

export default DesktopHeaderRight;
