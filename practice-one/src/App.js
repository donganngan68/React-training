import React from 'react';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

// Theme
import themeConfiguration from './theme';

// Import the StickyHeader component
import StickyHeader from './components/StickyHeader';

// Import the Header component
import Header from './components/Header';

// Import the Partners component
import Partners from './components/Partners';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
      <Partners />
    </ChakraProvider>
  );
}

export default App;
