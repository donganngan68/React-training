import React from 'react';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

// Theme
import themeConfiguration from './theme';

// Components
import StickyHeader from './components/StickyHeader';
import Header from './components/Header';
import Partners from './components/Partners';
import Highlight from './components/Highlight';
import ProductCardTable from './components/ProductCardTable';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
      <Partners />
      <Highlight />
      <ProductCardTable />
    </ChakraProvider>
  );
}

export default App;
