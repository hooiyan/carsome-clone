import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import React from 'react';

function HeaderLink({ isDrawer }) {
  return (
    <Link
      // as={RouterLink}
      // to='/buy-car'
      color='blue.500'
      padding={isDrawer ? 0 : 1}
      textDecor='none'
      _hover={{ textDecor: 'none' }}
    >
      View All Cars
      <ChevronRightIcon color='blue.500' fontSize='lg' ml={1} />
    </Link>
  );
}

export default HeaderLink;
