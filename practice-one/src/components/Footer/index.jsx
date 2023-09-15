import React from 'react';

// Libraries from Chakra UI
import {
  Box, Flex, Text, Image,
} from '@chakra-ui/react';

// Theme configuration
import theme from '../../theme';

// FooterMenu component
import FooterMenu from '../FooterMenu';

// Constants
const iconFooter = [
  {
    id: 0,
    name: 'Payment',
    logo: 'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/paypal.png?alt=media&token=4218d9bb-fb88-4809-b6c5-9a246457216c',
  },
  {
    id: 1,
    name: 'Visa',
    logo: 'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/visa.png?alt=media&token=0ec63b1d-a1b4-4c0b-9f27-87d5848f98d2',
  },
  {
    id: 2,
    name: 'Round',
    logo: 'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/round.png?alt=media&token=3f09107f-5fbd-4f16-848e-d53a69fafc2a',
  },
];

export const Footer = () => (
  <Box w="100%" px="36" pt="16" bg="#e4e4e4">
    <Flex justify="space-between" pb="16">
      <Box>
        <Text fontSize="2xl" fontWeight="bold" fontFamily={theme.default.fonts.secondary}>Brand</Text>
        <Text fontWeight="semibold" pt="6" pb="2">Subscribe to our Newsletter</Text>
        <Text fontSize="sm" width="80">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </Box>
      <Box>
        <FooterMenu />
      </Box>
    </Flex>
    <Box py="10">
      <Flex justify="space-between">
        <Text fontSize="sm">&#64; 2023 All rights reserved. Designed by Brand</Text>
        <Box>
          <Flex>
            <Text pr="12" fontSize="sm">Payment Partners</Text>
            {iconFooter.map(({ id, name, logo }) => (
              <Image pr="5" key={id} src={logo} alt={name} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Box>
);
