import React from 'react';
import {
  Box, Flex, Heading, HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// Container component
import Container from '../Container';

// Constants
import { images, headerMenu } from '../../constants';

export const Header = () => (
  <Box backgroundImage={images.headerBackgound} minH="4xl" backgroundRepeat="no-repeat" backgroundSize="cover">
    <Container>
      <Flex alignItems="center" py="26px">
        <Heading fontSize="lg">
          <Link to="/">
            Logo
          </Link>
        </Heading>
        <HStack ml="20" spacing="6">
          {headerMenu.map(({ id, name, href }) => (
            <Link key={id} to={href}>{name}</Link>
          ))}
        </HStack>
        <Box w="54" />
      </Flex>
    </Container>
  </Box>
);
