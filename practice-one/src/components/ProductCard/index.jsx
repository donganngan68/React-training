import React from 'react';

// Libraries from Chakra UI and PropTypes
import {
  GridItem,
  Box, Text, Image, Button, Flex, Modal, ModalOverlay,
  ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useDisclosure,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// ApiRequest
import { apiRequest } from '../../services';

export const ProductCard = ({
  product: {
    id, image, price, title,
  }, deleteRow,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteProduct = async (i) => {
    const deleteData = async () => {
      await apiRequest({ method: 'DELETE', apiName: `products/${i}` });
    };

    await deleteData();
    deleteRow();
  };

  return (
    <>
      <GridItem key={id}>
        <Box key={id}>
          <Box pos="relative">
            <Image minWidth="2xs" w="100%" src={image} />
            <Flex px="2.5" pos="absolute" bottom="3%">
              <Button w="28" h="7" mr="3.5" fontSize="md">
                <Link to={`/detail/${id}`}>
                  Show more
                </Link>
              </Button>
              <Button w="28" h="7" fontSize="md" opacity="0.5" bg="red" onClick={onOpen}>Delete</Button>
            </Flex>
          </Box>
          <Box pt="4" textAlign="center">
            <Text>{title}</Text>
            <Text color="primary">
              $
              {price}
            </Text>
          </Box>
        </Box>
      </GridItem>

      <Modal height="18" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Do you want to delete this product?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button h="10" mr={3} onClick={() => deleteProduct(id)}>
              Confirm
            </Button>
            <Button h="10" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

ProductCard.propTypes = {
  deleteRow: PropTypes.func.isRequired,
};
