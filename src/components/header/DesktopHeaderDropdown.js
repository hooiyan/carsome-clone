import { TriangleDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

function DesktopHeaderDropdown({ children, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu
      gutter={0}
      isOpen={isOpen}
      modifiers={[
        {
          name: 'arrow',
          enabled: true,
          options: {
            element: '[data-popper-arrow]',
            padding: 10,
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
      {/* <div id='popper'>
        <div data-popper-arrow></div>
      </div> */}
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} zIndex={9999}>
        {children}
      </MenuList>
    </Menu>
  );
}

export default DesktopHeaderDropdown;
