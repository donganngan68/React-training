import React from 'react';
import {
  Box, Flex, HStack, Image,
} from '@chakra-ui/react';
import Container from '../Container';

// Constants
import constants from '../../constants';

export default function Partners() {
  return (
    <Box>
      <Container>
        <Flex pt="71" pb="21" justify-content="center">
          <HStack px="14">
            {constants.partners.map((item) => (
              <Image mr="250" key={item.id} src={item.logo} alt={item.name} />
            ))}
            ;
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
