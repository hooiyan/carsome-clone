import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import MobileDrawerAccordionItem from './MobileDrawerAccordionItem';
import { AiFillCar } from 'react-icons/ai';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { RiMoneyDollarCircleFill, RiBuildingFill } from 'react-icons/ri';
import { MdComment } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import MobileDrawerPlainMenu from './MobileDrawerPlainMenu';

function MobileDrawerAccordion() {
  return (
    <Accordion allowMultiple borderWidth={0}>
      <MobileDrawerAccordionItem icon={AiFillCar} title='Buy Car' />
      <MobileDrawerPlainMenu icon={FaHandHoldingUsd} title='Sell Car' />
      <MobileDrawerAccordionItem
        icon={RiMoneyDollarCircleFill}
        title='Financing'
      />
      <MobileDrawerPlainMenu icon={MdComment} title='FAQ' />
      <MobileDrawerAccordionItem icon={RiBuildingFill} title='About Carsome' />
      <MobileDrawerAccordionItem icon={IoPerson} title='Dealers' />
    </Accordion>
  );
}

export default MobileDrawerAccordion;
