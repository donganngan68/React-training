import React from 'react';

// Libraries from Chakra UI and PropTypes
import {
  GridItem,
  Box, Text, Image, Button, Flex,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export const ProductCard = ({
  product: {
    id, image, price, title,
  }, onClickDelete,
}) => (
  <GridItem key={id}>
    <Box key={id}>
      <Box pos="relative">
        <Link to={`/detail/${id}`}>
          <Image minWidth="2xs" w="100%" height="302px" objectFit="cover" src={image} />
        </Link>
        <Flex px="2.5" pos="absolute" bottom="3%">
          <Button w="28" h="7" mr="3.5" fontSize="md">
            <Link to={`/detail/${id}`}>
              Show more
            </Link>
          </Button>
          <Button
            w="28"
            h="7"
            fontSize="md"
            opacity="0.5"
            bg="red"
            onClick={() => {
              onClickDelete(id);
            }}
          >
            Delete

          </Button>
        </Flex>
      </Box>
      <Box pt="4" textAlign="center">
        <Text>{title}</Text>
        <Text color="primary">
          $
          {price}
        </Text>
      </Box>
    </Box>
  </GridItem>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
