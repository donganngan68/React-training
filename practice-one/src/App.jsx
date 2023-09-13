import React from 'react';
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

// Page
import { HomePage, ProductDetailPage } from './pages';
import { MainLayout } from './layouts/MainLayout';

const defaultTheme = extendTheme(themeConfiguration.default);

const pages = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/detail/:id',
    element: <ProductDetailPage />,
  },
];

const App = () => (
  <ChakraProvider theme={defaultTheme}>
    <Router>
      <Routes>
        {pages.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <MainLayout
                isProductDetails={!(path === '/')}
              >
                {element}
              </MainLayout>
            )}
          />
        ))}
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
