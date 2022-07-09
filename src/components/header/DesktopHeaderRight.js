import { HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';

function DesktopHeaderRight() {
  return (
    <HStack spacing={10} w='30%'>
      <HStack>
        <Icon as={FaPhoneAlt} h={4} w={4} />
        <Text>1-800-82-3388</Text>
      </HStack>
      <HStack>
        <Icon as={IoPersonCircle} h={6} w={6} />
        <Text fontWeight='bold'>Sign Up/Login</Text>
      </HStack>
    </HStack>
  );
}

export default DesktopHeaderRight;
