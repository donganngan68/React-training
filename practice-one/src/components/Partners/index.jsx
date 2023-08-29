import React from 'react';
import {
  Box, Flex, HStack, Image,
} from '@chakra-ui/react';
import Container from '../Container';

// Constants
import constants from '../../constants';

export const Partners = () => (
  <Box pos="relative">
    <Container>
      <Flex pt="71" pb="21" justify-content="center">
        <HStack w="full" justify="space-around">
          {constants.partners.map(({ logo, id, name }) => (
            <Image key={id} src={logo} alt={name} />
          ))}
        </HStack>
      </Flex>
    </Container>
  </Box>
);
