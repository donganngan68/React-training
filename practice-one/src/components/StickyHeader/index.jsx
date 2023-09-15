import React from 'react';

// Libraries from Chakra UI
import {
  Box, Text, HStack, Link,
} from '@chakra-ui/react';

// Components
import Container from '../Container';

const navSticky = [
  {
    id: 0,
    name: 'Shipping',
    href: '#shipping',
  },
  {
    id: 1,
    name: 'FAQ',
    href: '#faq',
  },
  {
    id: 2,
    name: 'Contact',
    href: '#contact',
  },
];

export const StickyHeader = () => (
  <Box w="full" backgroundColor="primary">
    <Container>
      <HStack py="3" justify="space-between">
        <Text color="white" fontSize="sm">
          Support
          <Link href="tel:+331697720">(00) 33 169 7720</Link>
        </Text>
        <Text color="white" fontSize="sm">
          Free US shipping an all orders $100+ &nbsp;
          <Link href="#learn-more" textDecoration="underline">Learn more</Link>
        </Text>
        <HStack>
          {navSticky.map(({ id, href, name }) => (
            <Link color="white" fontSize="sm" key={id} href={href}>{name}</Link>
          ))}
          <Text color="white" fontSize="sm">Eng | S &#709;</Text>
        </HStack>
      </HStack>
    </Container>
  </Box>
);
