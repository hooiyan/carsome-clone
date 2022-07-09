import { Accordion, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdComment } from 'react-icons/md';
import { RiBuildingFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { MENU_ABOUT, MENU_DEALERS, MENU_FINANCING } from '../../constants/menu';
import CarBrands from '../../data/brand.json';
import Column from './Column';
import HeaderLink from './HeaderLink';
import MobileDrawerAccordionItem from './MobileDrawerAccordionItem';
import MobileDrawerPlainMenu from './MobileDrawerPlainMenu';
import RecommendButton from './RecommendButton';

function NestedAccordionItem({ items }) {
  return (
    <Flex flexDir='column'>
      {items.map((item) => {
        return (
          <Link
            key={item.id}
            py={2}
            textTransform='capitalize'
            _hover={{ textDecor: 'none' }}
          >
            {item.name}
          </Link>
        );
      })}
    </Flex>
  );
}

function MobileDrawerAccordion() {
  return (
    <Accordion allowMultiple borderWidth={0}>
      <MobileDrawerAccordionItem icon={AiFillCar} title='Buy Car'>
        <HeaderLink isDrawer />
        <Flex gap={6} mt={3}>
          <Column isDrawer data={CarBrands.slice(0, 11)} />
          <Column isDrawer data={CarBrands.slice(11, 22)} />
        </Flex>
        <RecommendButton isDrawer />
      </MobileDrawerAccordionItem>
      <MobileDrawerPlainMenu icon={FaHandHoldingUsd} title='Sell Car' />
      <MobileDrawerAccordionItem
        icon={RiMoneyDollarCircleFill}
        title='Financing'
      >
        <NestedAccordionItem items={MENU_FINANCING} />
      </MobileDrawerAccordionItem>
      <MobileDrawerPlainMenu icon={MdComment} title='FAQ' />
      <MobileDrawerAccordionItem icon={RiBuildingFill} title='About Carsome'>
        <NestedAccordionItem items={MENU_ABOUT} />
      </MobileDrawerAccordionItem>
      <MobileDrawerAccordionItem icon={IoPerson} title='Dealers'>
        <NestedAccordionItem items={MENU_DEALERS} />
        <Flex flexDir='column'></Flex>
      </MobileDrawerAccordionItem>
    </Accordion>
  );
}

export default MobileDrawerAccordion;
