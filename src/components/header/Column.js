import { Flex, Link } from '@chakra-ui/react';
import React from 'react';

function Column({ data, isDrawer }) {
  return (
    <Flex className='firstColumn' flexWrap='wrap' flexDir='column' gap={2}>
      {data.map((item) => {
        return (
          <Link
            key={item.id}
            pl={isDrawer ? 0 : 3}
            py={1}
            _hover={{ textDecor: 'none' }}
          >
            {item.type}
          </Link>
        );
      })}
    </Flex>
  );
}

export default Column;
