import { Text } from '@chakra-ui/react';
import React from 'react';

function Logo() {
  return (
    <Text
      fontSize={['md', 'md', 'md', 'lg', 'xl']}
      fontWeight='bold'
      pt={['0.5', '0.5', '0.5', '1']}
      textTransform='uppercase'
    >
      Carsome
    </Text>
  );
}

export default Logo;
