import React from 'react';

// Libraries from Chakra UI and PropTypes
import {
  Box, Text, Grid, GridItem,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

// BrandCardItem component
import { BrandCardItem } from '../BrandCardItem';

export const Brand = ({ brands }) => (
  <Box px="36" pt="24">
    <Text fontSize="2md" fontWeight="bold" textAlign="center" pb="10">Brand</Text>
    <Box>
      <Grid templateColumns="repeat(4, 1fr)">
        {brands.map((brand) => (
          <GridItem key={brand.id}>
            <BrandCardItem brand={brand} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  </Box>
);

Brand.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};
