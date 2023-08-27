import {
  Box, Container, Text, Image,
} from '@chakra-ui/react';
import React from 'react';

import PropTypes from 'prop-types';
import constants from '../../constants';

export default function ProductCardItem({ title, price }) {
  return (
    <Box>
      <Container>
        <Image w="100%" src={constants.images.coat} />
        <Box pt="4" textAlign="center">
          <Text>{title}</Text>
          <Text>{price}</Text>
        </Box>
      </Container>
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
