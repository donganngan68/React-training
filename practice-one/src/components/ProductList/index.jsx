import React from 'react';
import {
  Box, Button, Input, Text, Flex, Grid,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

// ProductCard component
import { ProductCard } from '../ProductCard';

// eslint-disable-next-line no-unused-vars
export const ProductList = ({ products }) => (
  <Box mx="36" pt="24">
    <Box textAlign="center" pb="10">
      <Text fontSize="xs" color="primary" fontWeight="semibold" textTransform="uppercase">Top Selling</Text>
      <Text fontSize="2md" fontWeight="bold">Best Weekend Sellers</Text>
    </Box>
    <Flex justify="space-between" pb="10">
      <Input variant="filled" w="96" size="lg" placeholder="Searching" />
      <Button variant="solid">Add New Product</Button>
    </Flex>
    <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="5" gridRowGap="6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  </Box>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
