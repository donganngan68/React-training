import React from 'react';
import {
  Box, Text, Image, Button, Flex,
} from '@chakra-ui/react';

// Theme configuration
import theme from '../../theme/index';

export default function ProductCardItem(products = []) {
  const { product } = products;
  return (
    <Box>
      <Box key={product.id}>
        <Box pos="relative">
          <Image minWidth="2xs" w="100%" src={product.image} />
          <Flex px="2.5" pos="absolute" bottom="3%">
            <Button w="28" h="7" mr="3.5" fontSize="2xs">Show more</Button>
            <Button w="28" h="7" fontSize="2xs" opacity="0.5" bg="red">Delete</Button>
          </Flex>
        </Box>
        <Box pt="4" textAlign="center">
          <Text>{product.title}</Text>
          <Text color={theme.default.colors.primary}>{product.price}</Text>
        </Box>
      </Box>
    </Box>
  );
}
