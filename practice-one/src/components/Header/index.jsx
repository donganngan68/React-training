import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Libraries from Chakra UI
import {
  Box, Flex, Heading, HStack,
} from '@chakra-ui/react';

// Container component
import Container from '../Container';

// Constants
import { images, headerMenu } from '../../constants';

export const Header = ({ isShowBackground }) => (
  <Box
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    {...(isShowBackground ? { backgroundImage: images.headerBackgound, minH: '4xl' } : {})}
  >
    <Container>
      <Flex alignItems="center" py="26px">
        <Heading fontSize="lg">
          <Link to="/">
            Logo
          </Link>
        </Heading>
        <HStack pl="56" spacing="6">
          {headerMenu.map(({ id, name, href }) => (
            <Link key={id} to={href}>{name}</Link>
          ))}
        </HStack>
        <Box w="54" />
      </Flex>
    </Container>
  </Box>
);

Header.propTypes = {
  isShowBackground: PropTypes.bool,
};

Header.defaultProps = {
  isShowBackground: true,
};
