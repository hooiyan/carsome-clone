import { Link } from '@chakra-ui/react';
import React from 'react';

function PlainMenu({ title }) {
  return (
    <Link
      // as={RouterLink}
      // to={to}
      fontSize='md'
      fontWeight='bold'
      padding={2}
      textTransform='capitalize'
      variant='unstyled'
      _focus={{ boxShadow: 'none' }}
      _hover={{ textDecor: 'none' }}
    >
      {title}
    </Link>
  );
}

export default PlainMenu;
