import { Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';

function MobileDrawerPlainMenu({ icon, title }) {
  return (
    <Link
      alignItems='center'
      display='flex'
      flex='1'
      px={6}
      py={2}
      textAlign='left'
      _hover={{ bgColor: 'gray.50' }}
    >
      <Icon as={icon} h={4} w={4} />
      <Text fontSize='sm' ml={2} pt={1}>
        {title}
      </Text>
    </Link>
  );
}

export default MobileDrawerPlainMenu;
