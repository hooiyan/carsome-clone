import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function MobileDrawerAccordionItem({ children, icon, title }) {
  return (
    <AccordionItem borderWidth={0} _last={{ borderBottomWidth: 1, pb: 1 }}>
      <h2>
        <AccordionButton pr={8} _hover={{ bgColor: 'gray.50' }}>
          <HStack flex='1' textAlign='left' px={2}>
            <Icon as={icon} h={4} w={4} />
            <Text fontSize='sm' pt={1}>
              {title}
            </Text>
          </HStack>
          <AccordionIcon color='gray.500' />
        </AccordionButton>
      </h2>
      <AccordionPanel borderWidth={0} pb={2} pl={12} pr={8}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default MobileDrawerAccordionItem;
