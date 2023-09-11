import React from 'react';

// Libraries from Chakra UI and PropTypes
import {
  Box, Image, Text,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

export const BrandCardItem = ({ brand: { id, image, name } }) => (
  <Box key={id} pos="relative">
    <Image minWidth="2xs" w="100%" src={image} alt={name} />
    <Text
      pos="absolute"
      bottom="50%"
      left="45%"
      fontSize="sm"
      fontWeight="semibold"
    >
      {name}
    </Text>
  </Box>
);

BrandCardItem.propTypes = {
  brand: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
