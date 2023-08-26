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

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  console.log(defaultTheme);
  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
      <Partners />
      <Highlight />
    </ChakraProvider>
  );
}

export default App;
