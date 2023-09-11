import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';

// Services
import { apiRequest } from '../services';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [partners, setPartners] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
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

  const providerData = useMemo(() => ({
    brands,
    setBrands,
    partners,
    setPartners,
    products,
    setProducts,
  }), [
    brands,
    setBrands,
    partners,
    setPartners,
    products,
    setProducts,
  ]);

  return (
    <AppContext.Provider value={providerData}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
