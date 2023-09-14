import React, {
  useCallback, useContext, useState,
} from 'react';

// Libraries from Chakra UI and PropTypes
import {
  Box, Button, Input, Text,
  Flex, Grid, Modal, ModalOverlay,
  ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useToast,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

// ProductCard component
import { ProductCard } from '../ProductCard';
import { ProductModal } from '../ProductModal';

// ApiRequest
import { apiRequest } from '../../services';
import { AppContext } from '../../contexts/AppContext';

export const ProductList = ({ products }) => {
  const toast = useToast();

  const initialFormProduct = {
    title: '',
    price: '',
    description: '',
    image: '',
  };

  const [formProduct, setFormProduct] = useState(initialFormProduct);
  const [formErrors, setFormErrors] = useState({});
  const [search, setSearch] = useState('');
  const [productId, setProductId] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const { setProducts } = useContext(AppContext);

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

  // Toggle modal
  const handleToggleProductModal = () => {
    setIsOpenProductModal(!isOpenProductModal);
    setFormProduct(initialFormProduct);
    setFormErrors({});
  };

  const handleToggleDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  // Submit Form
  const handleSubmitAddNewProduct = async () => {
    try {
      if (validateForm()) {
        const newForm = {
          ...formProduct,
          price: Number(formProduct.price),
        };
        await apiRequest({ method: 'POST', body: newForm, apiName: 'products' });

        setFormProduct(initialFormProduct);
        handleToggleProductModal();

        // Re-fetch & update products list
        const productsData = await apiRequest({ apiName: 'products' });
        setProducts(productsData);
      }
    } catch (error) {
      toast({
        title: 'API Error',
        description: 'An error occurred while communicating with the server.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleClickDelete = (id) => {
    setProductId(id);
    handleToggleDeleteModal();
  };

  const handleDeleteRow = async () => {
    const productsData = await apiRequest({ apiName: 'products' });

    setProducts(productsData);
  };

  const handleDeleteProduct = async (id) => {
    await apiRequest({ method: 'DELETE', apiName: `products/${id}` });

    handleDeleteRow();
    handleToggleDeleteModal();
  };

  const productFilterred = products?.filter(({ title }) => (
    (title).toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
  ));

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
          <Button variant="solid" onClick={handleToggleProductModal}>
            Add New Product
          </Button>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="5" gridRowGap="6">
          {productFilterred.length === 0
            ? <Text>No product found</Text>
            : productFilterred.map((product) => (
              <ProductCard key={product.id} product={product} onClickDelete={handleClickDelete} />
            ))}
        </Grid>
      </Box>

      {isOpenDeleteModal && (
      <Modal height="18" isOpen={isOpenDeleteModal} onClose={handleToggleDeleteModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Do you want to delete this product?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button h="10" mr={3} bg="red" onClick={() => handleDeleteProduct(productId)}>
              Confirm
            </Button>
            <Button h="10" onClick={handleToggleDeleteModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      )}

      {/* Modal add new product */}
      {isOpenProductModal && (
      <ProductModal
        modalTitle="Add New Product"
        isOpen={isOpenProductModal}
        product={formProduct}
        formErrors={formErrors}
        onChange={handleChange}
        onClose={handleToggleProductModal}
        onSubmit={handleSubmitAddNewProduct}
      />
      )}
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
};
