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
  const [brands, setBrands] = useState([]);
  const [partners, setPartners] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => () => {
    const getData = async () => {
      const brandData = await apiRequest({ apiName: 'brands' });
      const partnersData = await apiRequest({ apiName: 'partners' });
      const productsData = await apiRequest({ apiName: 'products' });

      setPartners(partnersData);
      setBrands(brandData);
      setProducts(productsData);
    };

    getData();
  }, []);

  return (
    <ChakraProvider theme={defaultTheme}>
      <StickyHeader />
      <Header />
      <Partners partners={partners} />
      <Highlight />
      <ProductList products={products} />
      <Brand brands={brands} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
