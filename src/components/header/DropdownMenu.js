import { TriangleDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  PopoverArrow,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

function DropdownMenu({ children, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu
      isOpen={isOpen}
      gutter={0}
      modifiers={[
        {
          name: 'arrow',
          options: {
            element: '[data-popper-arrow]',
          },
        },
      ]}
    >
      <MenuButton
        as={Button}
        rightIcon={<TriangleDownIcon w='10px' />}
        display='flex'
        fontSize='md'
        fontWeight='bold'
        margin={1}
        size='sm'
        textTransform='capitalize'
        variant='unstyled'
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _focus={{ boxShadow: 'none' }}
        _hover={{ textDecor: 'none' }}
      >
        {title}
      </MenuButton>
      <div id='popper'>
        <div data-popper-arrow></div>
      </div>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        {children}
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;
