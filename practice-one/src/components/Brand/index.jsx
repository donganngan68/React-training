import React from 'react';
import {
  Box, Text, Grid, GridItem,
} from '@chakra-ui/react';

// Data
import data from '../../constants/brand';

// BrandCardItem component
import { BrandCardItem } from '../BrandCardItem';

export const Brand = () => (
  <Box px="36" pt="24">
    <Text fontSize="2md" fontWeight="bold" textAlign="center" pb="10">Brand</Text>
    <Box>
      <Grid templateColumns="repeat(4, 1fr)">
        {data.map((product) => (
          <GridItem key={product.id}>
            <BrandCardItem product={product} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  </Box>
);
