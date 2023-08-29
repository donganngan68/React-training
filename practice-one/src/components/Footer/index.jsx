import React from 'react';
import {
  Box, Flex, Text, Image,
} from '@chakra-ui/react';

// Theme configuration
import theme from '../../theme';

// FooterMenu component
import FooterMenu from '../FooterMenu';

// Constants
import constants from '../../constants';

export default function Footer() {
  return (
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
          <Text fontSize="sm">@2023 All rights reserved. Designed by Brand</Text>
          <Box>
            <Flex>
              <Text pr="12" fontSize="sm">Payment Partners</Text>
              {constants.iconFooter.map(({ id, name, logo }) => (
                <Image pr="5" key={id} src={logo} alt={name} />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
