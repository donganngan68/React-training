import React, { useEffect, useState } from 'react';

import {
  Box, Button, Input, Text,
  Flex, Grid, useDisclosure, Modal, ModalOverlay,
  ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, FormControl, FormLabel, Textarea, FormErrorMessage,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

// ProductCard component

import { ProductCard } from '../ProductCard';

//  ApiRequest function
// ApiRequest function
import { apiRequest } from '../../helpers';

export const ProductList = ({ products, submit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialFormProduct = {
    title: '',
    price: '',
    description: '',
    image: '',
  };
  const [formProduct, setFormProduct] = useState(initialFormProduct);
  const [search, setSearch] = useState('');
  const [listSearch, setListSearch] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear the error message for the current field when it's changed
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
    setFormProduct({
      ...formProduct,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const {
      title, price, description, image,
    } = formProduct;
    if (!title) errors.title = 'Product name is required.';
    if (!price) errors.price = 'Product price is required.';
    if (!description) errors.description = 'Product description is required.';
    if (!image) errors.image = 'Product image is required.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Form is valid if errors object is empty
  };
  const handleCloseModal = () => {
    onClose();
    setFormProduct(initialFormProduct);
    setFormErrors({});
  };
  const submitForm = async () => {
    if (validateForm()) {
      const newForm = {
        ...formProduct,
        price: Number(formProduct.price),
        image: 'https://firebasestorage.googleapis.com/v0/b/card-f9463.appspot.com/o/coat.png?alt=media&token=f0930459-c12d-4cda-892a-c2f441df6541',
      };
      await apiRequest({ method: 'POST', body: newForm, apiName: 'products' });
    }
    getData();

    setFormProduct({
      title: '',
      price: '',
      image: '',
    });

    onClose();
    submit();
  };
  const handleDeleteRow = () => {
    submit();
  };

  useEffect(() => {
    setListSearch(products.filter((i) => (
      (i.title).toLocaleLowerCase() === search.toLocaleLowerCase()
    )));
  }, [search]);
  return (
    <>
      <Box mx="36" pt="24">
        <Box textAlign="center" pb="10">
          <Text fontSize="xs" color="primary" fontWeight="semibold" textTransform="uppercase">
            Top Selling
          </Text>
          <Text fontSize="2md" fontWeight="bold">
            Best Weekend Sellers
          </Text>
        </Box>
        <Flex justify="space-between" pb="10">
          <Input
            variant="filled"
            w="96"
            size="lg"
            placeholder="Searching"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="solid" onClick={onOpen}>
            Add New Product
          </Button>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="5" gridRowGap="6">
          {listSearch.length === 0 ? products.map((product) => (
            <ProductCard key={product.id} product={product} deleteRow={handleDeleteRow} />
          )) : listSearch.map((product) => (
            <ProductCard key={product.id} product={product} deleteRow={handleDeleteRow} />
          ))}
        </Grid>
      </Box>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={!!formErrors.title}>
              <FormLabel>Product Name</FormLabel>
              <Input name="title" value={formProduct.title} onChange={handleChange} placeholder="Product name" />
              <FormErrorMessage>{formErrors.title}</FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={!!formErrors.price}>
              <FormLabel>Product Price</FormLabel>
              <Input type="number" name="price" value={formProduct.price} onChange={handleChange} placeholder="Product price" />
              <FormErrorMessage>{formErrors.price}</FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={!!formErrors.description}>
              <FormLabel>Product Description</FormLabel>
              <Textarea placeholder="Product description" name="description" value={formProduct.description} onChange={handleChange} />
              <FormErrorMessage>{formErrors.description}</FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={!!formErrors.image}>
              <FormLabel>Product Image</FormLabel>
              <Input name="image" value={formProduct.image} onChange={handleChange} placeholder="Product image" />
              <FormErrorMessage>{formErrors.image}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button h="10" mr={3} onClick={submitForm}>
              Confirm
            </Button>
            <Button h="10" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
  submit: PropTypes.func.isRequired,
};
