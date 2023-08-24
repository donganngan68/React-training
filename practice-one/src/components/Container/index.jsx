import React, { memo } from 'react';
import {
  Container as ChakraContainer,
} from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Container = ({ children, ...rest }) => (
  <ChakraContainer
    maxW={{
      base: 'full',
      sm: 'container.sm',
      md: 'container.md',
      lg: 'container.lg',
      xl: 'container.xl',
    }}
    {...rest}
  >
    {children}

  </ChakraContainer>
);

export default memo(Container);
