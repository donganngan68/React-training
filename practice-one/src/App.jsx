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

const defaultTheme = extendTheme(themeConfiguration.default);

const App = () => (
  <ChakraProvider theme={defaultTheme}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={(<HomePage />)}
        />

        <Route
          path="/detail/:id"
          element={(<ProductDetailPage />)}
        />
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
