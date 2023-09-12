import React from 'react';

import {
  Button,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

// Components
import { ProductFormControl } from '../ProductFormControl';

export const ProductModal = ({
  product: {
    title, price, description, image,
  },
  formErrors: {
    title: titleMessage, price: priceMessage, description: descriptionMessage, image: imageMessage,
  },
  product,
  modalTitle,
  isOpen, onClose, onSubmit, onChange,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{modalTitle}</ModalHeader>
      <ModalCloseButton />

      <ModalBody pb={6}>
        <ProductFormControl name="title" title="Product Name" value={title} errorMessage={titleMessage} onChange={onChange} />
        <ProductFormControl name="price" title="Product Price" value={price.toString()} errorMessage={priceMessage} type="number" onChange={onChange} />
        <ProductFormControl name="description" title="Product Description" value={description} errorMessage={descriptionMessage} onChange={onChange} />
        <ProductFormControl name="image" title="Product Image" value={image} errorMessage={imageMessage} onChange={onChange} />
      </ModalBody>

      <ModalFooter>
        <Button h="10" mr={3} onClick={onSubmit}>
          Confirm
        </Button>
        <Button h="10" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>

    </ModalContent>
  </Modal>
);

ProductModal.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  formErrors: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  modalTitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
