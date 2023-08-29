import React from 'react';
import {
  Box, Flex, Heading, HStack, Link,
} from '@chakra-ui/react';

// Container component
import Container from '../Container';

// Constants
import constants from '../../constants';

export const Header = () => (
  <Box backgroundImage={constants.images.headerBackgound} minH="4xl" backgroundRepeat="no-repeat" backgroundSize="cover">
    <Container>
      <Flex alignItems="center" py="26px">
        <Heading fontSize="lg">Logo</Heading>
        <HStack ml="20" spacing="6">
          {constants.headerMenu.map(({ id, name, href }) => (
            <Link key={id} href={href}>{name}</Link>
          ))}
        </HStack>
      </Flex>
    </Container>
  </Box>
);
