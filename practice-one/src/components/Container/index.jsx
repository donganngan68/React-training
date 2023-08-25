import React, { memo } from 'react';

// propTypes library
import PropTypes from 'prop-types';

import {
  Container as ChakraContainer,
} from '@chakra-ui/react';

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

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};

export default memo(Container);
