import React from 'react';
import {
  ChakraProvider, extendTheme, Text,
} from '@chakra-ui/react';

import themeConfiguration from './theme';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Text>Hello World</Text>
    </ChakraProvider>
  );
}

export default App;
