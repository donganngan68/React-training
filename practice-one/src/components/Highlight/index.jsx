import React from 'react';

// Libraries from Chakra UI
import { Box, Text } from '@chakra-ui/react';

// Container component
import Container from '../Container';

// Constant
import { images } from '../../constants';

// Theme configuration
import theme from '../../theme/index';

export const Highlight = () => (
  <Box backgroundImage={images.highlight} height="lg" backgroundRepeat="no-repeat" backgroundSize="cover">
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
