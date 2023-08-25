import React from 'react';
import {
  Box, Flex, Heading, HStack, Text,
} from '@chakra-ui/react';

// Container component
import Container from '../Container';

// Constants
import Constants from '../../constants';

export default function Header() {
  return (
    <Box backgroundImage={Constants.images.headerBackgound} minH="3xl" backgroundRepeat="no-repeat" backgroundSize="cover">
      <Container>
        <Flex alignItems="center" py="26px">
          <Heading fontSize="lg">Logo</Heading>
          <HStack ml="56" spacing="6">
            {Constants.headerMenu.map((item) => <Text key={item}>{item}</Text>)}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
