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
import ProductList from './components/ProductList';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
      <Partners />
      <Highlight />
      <ProductList />
    </ChakraProvider>
  );
}

export default App;
