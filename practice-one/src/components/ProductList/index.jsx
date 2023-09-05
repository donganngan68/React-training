import React from 'react';
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

// eslint-disable-next-line no-unused-vars
export const ProductList = ({ products }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <ProductCard key={product.id} product={product} />
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
              <Input placeholder="Product name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Price</FormLabel>
              <Input type="number" placeholder="Product price" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Description</FormLabel>
              <Textarea placeholder="Product description" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Image</FormLabel>
              <Input placeholder="Product image" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button h="10" mr={3} onClick={onClose}>
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
