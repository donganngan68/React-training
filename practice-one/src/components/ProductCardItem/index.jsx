import React from 'react';
import {
  Box, Text, Image, Button, Flex,
} from '@chakra-ui/react';

//  PropTypes library
import PropTypes from 'prop-types';

// Constants
import constants from '../../constants';

export default function ProductCardItem({ title, price }) {
  return (
    <Box>
      <Box pos="relative">
        <Image minWidth="2xs" w="100%" src={constants.images.coat} />
        <Flex px="2.5" pos="absolute" bottom="3%">
          <Button w="28" h="7" mr="3.5" fontSize="2xs">Show more</Button>
          <Button w="28" h="7" fontSize="2xs" opacity="0.5" bg="red">Delete</Button>
        </Flex>
      </Box>
      <Box pt="4" textAlign="center">
        <Text>{title}</Text>
        <Text>{price}</Text>
      </Box>

    </Box>
  );
}

ProductCardItem.propTypes = {
  title: PropTypes.node,
  price: PropTypes.node,
};

ProductCardItem.defaultProps = {
  title: null,
  price: null,
};
