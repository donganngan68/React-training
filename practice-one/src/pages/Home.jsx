import React, { useContext, useEffect } from 'react';

// Contexts
import { AppContext } from '../contexts/AppContext';

// Components
import {
  StickyHeader, Header, Partners, Highlight, ProductList, Brand, Footer,
} from '../components';
import { apiRequest } from '../services';

const HomePage = () => {
  const {
    brands, partners, products, setProducts, setBrands, setPartners,
  } = useContext(AppContext);

  useEffect(() => () => {
    const getData = async () => {
      const brandData = await apiRequest({ apiName: 'brands' });
      const partnersData = await apiRequest({ apiName: 'partners' });
      const productsData = await apiRequest({ apiName: 'products' });

      setBrands(brandData ?? []);
      setPartners(partnersData ?? []);
      setProducts(productsData ?? []);
    };

    getData();
  }, []);

  return (
    <>
      <Partners partners={partners} />
      <Highlight />
      <ProductList products={products} />
      <Brand brands={brands} />
    </>
  );
};

export default HomePage;
