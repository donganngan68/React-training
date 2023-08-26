import {
  Box, Container, Text, Image,
} from '@chakra-ui/react';
import React from 'react';

import PropTypes from 'prop-types';
import constants from '../../constants';

export default function ProductCardItem({ title }) {
  return (
    <Box>
      <Container>
        <Image src={constants.images.coat} />
        <Text>{title}</Text>
      </Container>
    </Box>
  );
}

ProductCardItem.propTypes = {
  title: PropTypes.node,
};

ProductCardItem.defaultProps = {
  title: null,
};
