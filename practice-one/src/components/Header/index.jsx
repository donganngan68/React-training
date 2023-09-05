import React from 'react';
import {
  Box, Flex, Heading, HStack, Link,
} from '@chakra-ui/react';

// Container component
import Container from '../Container';

// Constants
import { images, headerMenu } from '../../constants';

export const Header = () => (
  <Box backgroundImage={images.headerBackgound} minH="4xl" backgroundRepeat="no-repeat" backgroundSize="cover">
    <Container>
      <Flex alignItems="center" py="26px">
        <Heading fontSize="lg">Logo</Heading>
        <HStack ml="20" spacing="6">
          {headerMenu.map(({ id, name, href }) => (
            <Link key={id} href={href}>{name}</Link>
          ))}
        </HStack>
        <Box w="54" />
      </Flex>
    </Container>
  </Box>
);
