import React, { useEffect, useState } from 'react';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

// Theme
import themeConfiguration from './theme';

// Components
import {
  StickyHeader, Header, Partners, Highlight, ProductList, Brand, Footer,
} from './components';

// Helpers
import { apiRequest } from './helpers';

const defaultTheme = extendTheme(themeConfiguration.default);

function App() {
  const [data, setData] = useState({
    brands: [],
    partners: [],
    products: [],
  });

  const getData = async () => {
    const brandData = await apiRequest({ apiName: 'brands' });
    const partnersData = await apiRequest({ apiName: 'partners' });
    const productsData = await apiRequest({ apiName: 'products' });

    setData({
      brands: brandData,
      partners: partnersData,
      products: productsData,
    });
  };

  useEffect(() => () => {
    getData();
  }, []);

  const renderProduct = () => {
    getData();
  };

  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
      <Partners partners={data.partners} />
      <Highlight />
      <ProductList products={data.products} submit={renderProduct} />
      <Brand brands={data.brands} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
