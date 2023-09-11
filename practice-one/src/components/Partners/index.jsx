import React from 'react';

// Libraries from Chakra UI and PropTypes
import {
  Box, Flex, HStack, Image,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

// Components
import Container from '../Container';

export const Partners = ({ partners }) => (
  <Box pos="relative">
    <Container>
      <Flex pt="71" pb="21" justify-content="center">
        <HStack w="full" justify="space-around">
          {partners.map(({ logo, id, name }) => (
            <Image key={id} src={logo} alt={name} />
          ))}
        </HStack>
      </Flex>
    </Container>
  </Box>
);

Partners.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    logo: PropTypes.string,
  })).isRequired,
};
