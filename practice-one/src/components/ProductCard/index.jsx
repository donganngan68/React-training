import React from 'react';
import {
  GridItem,
  Box, Text, Image, Button, Flex,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { apiRequest } from '../../helpers';

export const ProductCard = ({
  product: {
    id, image, price, title,
  }, deleteRow,
}) => {
  const deleteProduct = (i) => {
    const deleteData = async () => {
      await apiRequest({ method: 'DELETE', apiName: `products/${i}` });
    };

    deleteData();
    deleteRow();
  };

  return (
    <>
      <GridItem key={id}>
        <Box key={id}>
          <Box pos="relative">
            <Image minWidth="2xs" w="100%" src={image} />
            <Flex px="2.5" pos="absolute" bottom="3%">
              <Button w="28" h="7" mr="3.5" fontSize="md">
                Show more
              </Button>
              <Button w="28" h="7" fontSize="md" opacity="0.5" bg="red" onClick={() => deleteProduct(id)}>Delete</Button>
            </Flex>
          </Box>
          <Box pt="4" textAlign="center">
            <Text>{title}</Text>
            <Text color="primary">{price}</Text>
          </Box>
        </Box>
      </GridItem>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

ProductCard.propTypes = {
  deleteRow: PropTypes.func.isRequired,
};
