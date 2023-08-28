import React from 'react';
import {
  Box, Flex, HStack, Image,
} from '@chakra-ui/react';
import Container from '../Container';

// Constants
import constants from '../../constants';

export default function Partners() {
  return (
    <Box pos="relative">
      <Container>
        <Flex pos="absolute" pt="71" pb="21" justify-content="center">
          <HStack px="14">
            {constants.partners.map(({ logo, id, name }) => {
              if (!logo) {
                return null;
              }

              return (
                <Image pr="64" key={id} src={logo} alt={name} />
              );
            })}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
