import React from 'react';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

// Theme
import themeConfiguration from './theme';

import StickyHeader from './components/StickyHeader';
import Header from './components/Header';
import Partners from './components/Partners';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  console.log(defaultTheme);
  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
      <Partners />
    </ChakraProvider>
  );
}

export default App;
