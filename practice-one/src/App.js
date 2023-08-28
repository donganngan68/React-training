import React from 'react';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

// Theme
import themeConfiguration from './theme';

// Components
import Components from './components';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  console.log(defaultTheme);
  return (
    <ChakraProvider theme={defaultTheme}>
      <Components.StickyHeader />
      <Components.Header />
      <Components.Partners />
      <Components.Highlight />
      <Components.ProductList />
      <Components.Brand />
    </ChakraProvider>
  );
}

export default App;
