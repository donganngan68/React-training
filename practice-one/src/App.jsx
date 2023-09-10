import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

// Theme
import themeConfiguration from './theme';

// Components
import {
  StickyHeader, Header, Partners, Highlight, ProductList, Brand, Footer, DetailProduct,
} from './components';

// Helpers
import { apiRequest } from './services';

// Contexts
import { AppContext } from './contexts/AppContext';

const defaultTheme = extendTheme(themeConfiguration.default);

const App = () => {
  const { brands, partners, products } = useContext(AppContext);

  const renderProduct = () => {
    console.log('---');
  };

  return (
    <ChakraProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <StickyHeader />
                <Header />
                <Partners partners={partners} />
                <Highlight />
                <ProductList products={products} submit={renderProduct} />
                <Brand brands={brands} />
                <Footer />
              </>
              )}
          />

          <Route
            path="/detail/:id"
            element={(
              <DetailProduct products={products} submit={renderProduct} />
              )}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
