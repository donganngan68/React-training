import React, { useState } from 'react';
import {
  Box, Button, Input, Text, Flex, Grid, useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

// ProductCard component
import { ProductCard } from '../ProductCard';

import { apiRequest } from '../../helpers';

// eslint-disable-next-line no-unused-vars
export const ProductList = ({ products, submit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formProduct, setFormProduct] = useState({
    title: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormProduct({
      ...formProduct,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formProduct.image);

  const submitForm = () => {
    const getData = async () => {
      const newForm = {
        ...formProduct,
        price: Number(formProduct.price),
        image: 'https://firebasestorage.googleapis.com/v0/b/card-f9463.appspot.com/o/coat.png?alt=media&token=f0930459-c12d-4cda-892a-c2f441df6541',
      };

      await apiRequest({ method: 'POST', body: newForm, apiName: 'products' });
    };
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

  return (
    <>
      <Box mx="36" pt="24">
        <Box textAlign="center" pb="10">
          <Text fontSize="xs" color="primary" fontWeight="semibold" textTransform="uppercase">Top Selling</Text>
          <Text fontSize="2md" fontWeight="bold">Best Weekend Sellers</Text>
        </Box>
        <Flex justify="space-between" pb="10">
          <Input variant="filled" w="96" size="lg" placeholder="Searching" />
          <Button variant="solid" onClick={onOpen}>Add New Product</Button>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="5" gridRowGap="6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} deleteRow={handleDeleteRow} />
          ))}
        </Grid>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                name="title"
                value={formProduct.title}
                onChange={handleChange}
                placeholder="Product name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Price</FormLabel>
              <Input
                type="number"
                name="price"
                value={formProduct.price}
                onChange={handleChange}
                placeholder="Product price"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Description</FormLabel>
              <Textarea
                placeholder="Product description"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Image</FormLabel>
              <Input
                name="image"
                value={formProduct.image}
                onChange={handleChange}
                placeholder="Product image"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button h="10" mr={3} onClick={submitForm}>
              Confirm
            </Button>
            <Button h="10" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

ProductList.propTypes = {
  submit: PropTypes.func.isRequired,
};
