import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, StickyHeader } from '../components';

export const MainLayout = ({ isPoductDetails, children }) => (
  <>
    {!isPoductDetails && <StickyHeader />}
    <Header isShowBackground={!isPoductDetails} />
    {children}
    <Footer />
  </>
);

MainLayout.propTypes = {
  isPoductDetails: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  isPoductDetails: false,
};
