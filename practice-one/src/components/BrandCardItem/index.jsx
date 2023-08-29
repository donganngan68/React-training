import React from 'react';
import {
  Box, Image, Text,
} from '@chakra-ui/react';

export const BrandCardItem = (products = []) => {
  const { product } = products;
  return (
    <Box key={product.id} pos="relative">
      <Image minWidth="2xs" w="100%" src={product.image} alt={product.alt} />
      <Text pos="absolute" bottom="50%" left="45%" fontSize="sm" fontWeight="semibold">Brand</Text>
    </Box>
  );
};
