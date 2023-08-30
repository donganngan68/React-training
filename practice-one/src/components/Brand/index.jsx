import React from 'react';
import {
  Box, Text, Grid, GridItem,
} from '@chakra-ui/react';

// BrandCardItem component
import { BrandCardItem } from '../BrandCardItem';
import { useFetch } from '../Hooks/useFetch';

export const Brand = () => {
  const { data: brands, mutate } = useFetch({
    apiName: 'brands',
    method: 'POST',
  });

  return (
    <Box px="36" pt="24">
      <button
        type="button"
        onClick={async () => {
          const data2 = await mutate();

          console.log(data2);
        }}
      >
        test
      </button>
      <Text fontSize="2md" fontWeight="bold" textAlign="center" pb="10">Brand</Text>
      <Box>
        <Grid templateColumns="repeat(4, 1fr)">
          {brands && brands.map((brand) => (
            <GridItem key={brand.id}>
              <BrandCardItem brand={brand} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
