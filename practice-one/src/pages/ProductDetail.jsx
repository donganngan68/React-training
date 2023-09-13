import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import {
  Box, Flex, Image, Text, Button, useDisclosure,
} from '@chakra-ui/react';

import { useParams } from 'react-router';

// Components
import {
  Footer, Header, ProductModal,
} from '../components';

import Container from '../components/Container';

// ApiRequest
import { apiRequest } from '../services';
import { AppContext } from '../contexts/AppContext';

const ProductDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formProduct, setFormProduct] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleGetProduct = async () => {
    const productData = await apiRequest({ apiName: `products/${id}` });

    setProduct(productData);
    setFormProduct({ ...productData, price: productData.price.toString() });
  };

  useEffect(() => {
    if (id) {
      handleGetProduct();
    } else {
      // TODO: Update later
    }
  }, []);

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
    setFormProduct(product);
    setFormErrors({});
  };

  const handleSubmitProduct = async () => {
    if (validateForm()) {
      const newForm = {
        ...formProduct,
        price: Number(formProduct.price),
      };
      await apiRequest({ method: 'PUT', body: newForm, apiName: `products/${id}` });
      handleGetProduct();
      handleCloseModal();
    }
  };

  return (
    <>
      <Container>
        <Flex pt="14">
          <Box w="2xl" mb="10" mr="24">
            <Image w="100%" src={product?.image} />
            <Text mt="14" mb="8" textDecor="underline">Description</Text>
            <Text fontSize="sm">
              {product?.description}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="2md" fontFamily="secondary">
              {product?.title}
            </Text>
            <Text my="5" color="primary" fontWeight="semibold">
              $
              {product?.price}
            </Text>
            <Button w="80" onClick={onOpen}>
              Edit
            </Button>
          </Box>
        </Flex>
      </Container>

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
