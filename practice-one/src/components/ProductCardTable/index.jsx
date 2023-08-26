import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProductCardItem from '../ProductCardItem';

export default function ProductCard() {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem w="100%">
          <ProductCardItem title="Hi1" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Hi2" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Hi3" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Hi4" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Hi5" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Hi6" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Hi7" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Hi8" />
        </GridItem>
      </Grid>
    </Box>
  );
}
