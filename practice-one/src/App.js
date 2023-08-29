import React from 'react';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

// Theme
import themeConfiguration from './theme';

import {
  StickyHeader, Header, Partners, Highlight, ProductList, Brand, Footer,
} from './components/index';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  console.log(defaultTheme);
  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
      <Partners />
      <Highlight />
      <ProductList />
      <Brand />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
