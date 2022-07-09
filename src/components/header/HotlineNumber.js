import { HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function HotlineNumber({ isDrawer = false }) {
  return (
    <>
      {isDrawer ? (
        <HStack px={6} py={2}>
          <Icon as={FaPhoneAlt} color='blue.500' h={4} w={4} />
          <Text color='blue.500' pt={1}>
            1-800-82-3388
          </Text>
        </HStack>
      ) : (
        <HStack>
          <Icon as={FaPhoneAlt} h={4} w={4} />
          <Text>1-800-82-3388</Text>
        </HStack>
      )}
    </>
  );
}

export default HotlineNumber;
