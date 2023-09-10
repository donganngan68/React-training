import React, { useContext } from 'react';

// Contexts
import { AppContext } from '../contexts/AppContext';

// Components
import {
  StickyHeader, Header, Partners, Highlight, ProductList, Brand, Footer,
} from '../components';

const HomePage = () => {
  const { brands, partners, products } = useContext(AppContext);

  return (
    <>
      <StickyHeader />
      <Header />
      <Partners partners={partners} />
      <Highlight />
      <ProductList products={products} />
      <Brand brands={brands} />
      <Footer />
    </>
  );
};

export default HomePage;
