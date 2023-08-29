import React from 'react';
import {
  Box, Button, Input, Text, Flex,
} from '@chakra-ui/react';

// ProductCard component
import { ProductCard } from '../ProductCard';

export const ProductList = () => (
  <Box mx="36" pt="24">
    <Box textAlign="center" pb="10">
      <Text fontSize="xs" color="primary" fontWeight="semibold" textTransform="uppercase">Top Selling</Text>
      <Text fontSize="2md" fontWeight="bold">Best Weekend Sellers</Text>
    </Box>
    <Flex justify="space-between" pb="10">
      <Input variant="filled" w="96" size="lg" placeholder="Searching" />
      <Button variant="solid">Add New Product</Button>
    </Flex>
    <ProductCard />
  </Box>
);
