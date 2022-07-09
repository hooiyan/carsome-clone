import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { TbCar } from 'react-icons/tb';

function RecommendButton({ isDrawer }) {
  return (
    <Button
      leftIcon={<Icon as={TbCar} h={4} w={4} />}
      display='flex'
      alignItems='center'
      colorScheme='yellow'
      fontSize='sm'
      fontWeight='normal'
      marginBottom={2}
      marginTop={4}
      marginX={isDrawer ? 0 : 4}
    >
      Recommend Me a Car
    </Button>
  );
}

export default RecommendButton;
