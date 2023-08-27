import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProductCardItem from '../ProductCardItem';

export default function ProductCard() {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem w="100%">
          <ProductCardItem title="Woman in Red Coat" price="$89" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Woman in Red Coat" price="$89" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Woman in Red Coat" price="$89" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Woman in Red Coat" price="$89" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Woman in Red Coat" price="$89" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Woman in Red Coat" price="$89" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Woman in Red Coat" price="$89" />
        </GridItem>
        <GridItem w="100%">
          <ProductCardItem title="Woman in Red Coat" price="$89" />
        </GridItem>
      </Grid>
    </Box>
  );
}
