import React from 'react';

// PropTypes library
import PropTypes from 'prop-types';

import {
  Container as ChakraContainer,
} from '@chakra-ui/react';

const Container = ({ children, ...rest }) => (
  // TODO: Apply theme
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

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};

export default Container;
