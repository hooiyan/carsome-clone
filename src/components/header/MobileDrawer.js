import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
  Box,
  HStack,
  Text,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Logo from './Logo';
import MobileDrawerAccordion from './MobileDrawerAccordion';
import HotlineNumber from './HotlineNumber';

function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon as={FiMenu} cursor='pointer' h={6} w={6} onClick={onOpen} />
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={[1, 1, 1, 2]} />
          <DrawerHeader borderBottomWidth={1}>
            <Logo />
          </DrawerHeader>
          <DrawerBody p={0} overflowY='scroll'>
            <MobileDrawerAccordion />
            <HotlineNumber isDrawer />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileDrawer;
