import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, StickyHeader } from '../components';

export const MainLayout = ({ isProductDetails, children }) => (
  <>
    {!isProductDetails && <StickyHeader />}
    <Header isShowBackground={!isProductDetails} />
    {children}
    <Footer />
  </>
);

MainLayout.propTypes = {
  isProductDetails: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  isProductDetails: false,
};
