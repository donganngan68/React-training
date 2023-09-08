import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Libraries from Chakra UI and PropTypes
import {
  Box, Flex, HStack, Heading, Image, Text, Button,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, FormControl, FormLabel, Input, Textarea, ModalFooter, useDisclosure,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

// Components
import { Footer } from '../Footer';
import { headerMenu } from '../../constants';
import Container from '../Container';

// ApiRequest
import { apiRequest } from '../../helpers';

export const DetailProduct = ({ products, submit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const idDetail = window.location.pathname.split('/')[2];
  const itemDetail = products.find((i) => i.id === Number(idDetail));

  const [formProduct, setFormProduct] = useState({});

  const initialFormProduct = {
    title: itemDetail?.title,
    price: itemDetail?.price,
    description: itemDetail?.description,
    image: itemDetail?.image,
  };

  useEffect(() => {
    setFormProduct(initialFormProduct);
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormProduct({
      ...formProduct,
      [name]: value,
    });
  };

  const submitForm = async () => {
    const newForm = {
      ...formProduct,
      price: Number(formProduct.price),
    };
    await apiRequest({
      method: 'PUT', body: newForm, apiName: `products/${idDetail}`,
    });
    onClose();
    submit();
  };

  return (
    <>
      <Box>
        <Container>
          <Flex alignItems="center" py="26px">
            <Heading mr="60" fontSize="lg">
              <Link to="/">Logo</Link>
            </Heading>
            <HStack ml="20" spacing="6">
              {headerMenu.map(({ id, name, href }) => (
                <Link key={id} to={href}>{name}</Link>
              ))}
            </HStack>
          </Flex>
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
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Information Product</ModalHeader>
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
                name="description"
                placeholder="Product description"
                value={formProduct.description}
                onChange={handleChange}
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

DetailProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  submit: PropTypes.func.isRequired,
};
