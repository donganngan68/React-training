import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import Container from '../Container';
import constants from '../../constants';
import theme from '../../theme/index';

export default function index() {
  return (
    <Box backgroundImage={constants.images.highlight} height="lg" backgroundRepeat="no-repeat" backgroundSize="cover">
      <Container pt="28">
        <Text fontSize="5xl" fontWeight="bold" fontFamily={theme.default.fonts.secondary}>
          New
          <span style={{ color: theme.default.colors.primary }}>
            &nbsp;2023&nbsp;
          </span>
        </Text>
        <Text fontSize="5xl" fontWeight="bold" fontFamily={theme.default.fonts.secondary}>Clothes Collection</Text>
      </Container>
    </Box>
  );
}
