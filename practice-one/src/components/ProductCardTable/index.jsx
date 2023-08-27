import React from 'react';
import {
  Box, Grid, GridItem,
} from '@chakra-ui/react';

// ProductCardItem component
import ProductCardItem from '../ProductCardItem';

export default function ProductCardTable() {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="5" gridRowGap="6">
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
