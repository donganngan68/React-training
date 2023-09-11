import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import {
  Box, Flex, Image, Text, Button, useDisclosure,
} from '@chakra-ui/react';

// Components
import {
  Footer, Header, ProductModal,
} from '../components';

import Container from '../components/Container';

// ApiRequest
import { apiRequest } from '../services';
import { AppContext } from '../contexts/AppContext';

const ProductDetailPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setProducts, products } = useContext(AppContext);

  const idDetail = window.location.pathname.split('/')[2];
  const itemDetail = products.find((i) => i.id === Number(idDetail));

  const [formProduct, setFormProduct] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const initialFormProduct = {
    title: itemDetail?.title,
    price: itemDetail?.price,
    description: itemDetail?.description,
    image: itemDetail?.image,
  };

  useEffect(() => {
    setFormProduct(initialFormProduct);
  }, [products]);

  // Validate form
  const validateForm = useCallback(
    () => {
      const errors = {};

      Object.keys(formProduct).forEach((field) => {
        if (!formProduct[field]) {
          errors[field] = `Product ${field} is required.`;
        } else {
          delete errors[field];
        }
      });

      setFormErrors(errors);

      return !Object.keys(errors).length;
    },
    [setFormErrors, formProduct],
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormProduct({
      ...formProduct,
      [name]: value,
    });
  }, [formProduct]);

  // Close modal
  const handleCloseModal = () => {
    onClose();
    setFormProduct(initialFormProduct);
    setFormErrors({});
  };

  const handleSubmitProduct = async () => {
    if (validateForm()) {
      const newForm = {
        ...formProduct,
        price: Number(formProduct.price),
      };
      await apiRequest({ method: 'PUT', body: newForm, apiName: `products/${idDetail}` });

      setFormProduct(initialFormProduct);
      handleCloseModal();
      // Re-fetch & update products list
      const productsData = await apiRequest({ apiName: 'products' });
      setProducts(productsData);
    }
  };

  return (
    <>
      <Container>
        <Header isShowBackground={false} />
        <Flex pt="14">
          <Box mb="10" mr="24">
            <Image w="100%" src={itemDetail?.image} />
            <Text mt="14" mb="8" textDecor="underline">Description</Text>
            <Text fontSize="sm">
              {itemDetail?.description}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="2md" fontFamily="secondary">
              {itemDetail?.title}
            </Text>
            <Text my="5" color="primary" fontWeight="semibold">
              $
              {itemDetail?.price}
            </Text>
            <Button w="80" onClick={onOpen}>
              Edit
            </Button>
          </Box>
        </Flex>
      </Container>
      <Footer />

      {isOpen
      && (
      <ProductModal
        modalTitle="Edit Product"
        isOpen={isOpen}
        product={formProduct}
        formErrors={formErrors}
        onChange={handleChange}
        onClose={handleCloseModal}
        onSubmit={handleSubmitProduct}
      />
      )}
    </>

  );
};

export default ProductDetailPage;
