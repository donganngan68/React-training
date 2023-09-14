import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormErrorMessage, FormLabel, Input,
} from '@chakra-ui/react';

export const ProductFormControl = ({
  title, name, value, errorMessage, type, onChange,

}) => (
  <FormControl isInvalid={!!errorMessage}>
    <FormLabel>{title}</FormLabel>
    <Input mb="2" name={name} value={value} onChange={onChange} placeholder={title} type={type} />
    <FormErrorMessage mb="1">{errorMessage}</FormErrorMessage>
  </FormControl>
);

ProductFormControl.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ProductFormControl.defaultProps = {
  type: 'text',
  errorMessage: '',
};
