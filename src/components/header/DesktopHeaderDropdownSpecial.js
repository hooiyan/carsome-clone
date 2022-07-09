import {
  TriangleDownIcon
} from '@chakra-ui/icons';
import {
  Button, Popover, PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/react';
import React from 'react';
import CarBrands from '../../data/brand.json';
import Column from './Column';
import HeaderLink from './HeaderLink';
import RecommendButton from './RecommendButton';

function DesktopHeaderDropdownSpecial() {
  return (
    <Popover
      trigger='hover'
      closeDelay={0}
      openDelay={0}
      gutter={0}
      matchWidth={false}
      placement='bottom-start'
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
          <HeaderLink />
        </PopoverHeader>
        {/* <PopoverArrow /> */}
        <PopoverBody display='flex' padding={1}>
          <Column data={CarBrands.slice(0, 11)} />
          <Column data={CarBrands.slice(11, 22)} />
        </PopoverBody>
        <RecommendButton />
      </PopoverContent>
    </Popover>
  );
}

export default DesktopHeaderDropdownSpecial;
