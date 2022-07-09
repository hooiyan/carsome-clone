import {
  ChevronRightIcon,
  Search2Icon,
  TriangleDownIcon,
} from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CarBrands from '../../data/brand.json';

function Column({ data }) {
  return (
    <Flex className='firstColumn' flexWrap='wrap' flexDir='column' gap={2}>
      {data.map((item) => {
        return (
          <Link key={item.id} pl={3} py={1} _hover={{ textDecor: 'none' }}>
            {item.type}
          </Link>
        );
      })}
    </Flex>
  );
}

function SpecialDropdownMenu() {
  return (
    <Popover
      trigger='hover'
      closeDelay={0}
      openDelay={0}
      gutter={0}
      matchWidth={false}
    >
      <PopoverTrigger>
        <Button
          rightIcon={<TriangleDownIcon w='10px' />}
          display='flex'
          fontWeight='bold'
          textTransform='capitalize'
          variant='unstyled'
          _focus={{ boxShadow: 'none' }}
        >
          Buy Car
        </Button>
      </PopoverTrigger>
      <PopoverContent _focus={{ boxShadow: 'none' }} paddingTop={3} w='auto'>
        <PopoverHeader borderWidth={0} marginBottom={2}>
          <Link
            // as={RouterLink}
            // to='/buy-car'
            color='blue.500'
            padding={1}
            textDecor='none'
            _hover={{ textDecor: 'none' }}
          >
            View All Cars
            <ChevronRightIcon color='blue.500' fontSize='lg' ml={1} />
          </Link>
        </PopoverHeader>
        {/* <PopoverArrow /> */}
        <PopoverBody display='flex' padding={1}>
          <Column data={CarBrands.slice(0, 11)} />
          <Column data={CarBrands.slice(11, 22)} />
        </PopoverBody>
        <Button
          leftIcon={<Search2Icon />}
          display='flex'
          alignItems='center'
          colorScheme='yellow'
          fontSize='sm'
          fontWeight='normal'
          marginBottom={2}
          marginTop={4}
          marginX={4}
        >
          Recommend Me a Car
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default SpecialDropdownMenu;
