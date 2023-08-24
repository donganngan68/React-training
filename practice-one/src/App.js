import React from 'react';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

// Theme
import themeConfiguration from './theme';

import StickyHeader from './components/StickyHeader';
import Header from './components/Header';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
    </ChakraProvider>
  );
}

export default App;
