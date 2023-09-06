import {
  Box, Flex, HStack, Heading, Link, Image, Text, Button,
} from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../Footer';
import { headerMenu } from '../../constants';
import Container from '../Container';

export const DetailProduct = () => (
  <Box>
    <Container>
      <Flex alignItems="center" py="26px">
        <Heading mr="60" fontSize="lg">Logo</Heading>
        <HStack ml="20" spacing="6">
          {headerMenu.map(({ id, name, href }) => (
            <Link key={id} href={href}>{name}</Link>
          ))}
        </HStack>
      </Flex>
      <Flex pt="14">
        <Box mb="10" mr="24">
          <Image w="100%" src="https://firebasestorage.googleapis.com/v0/b/card-f9463.appspot.com/o/coat.png?alt=media&token=f0930459-c12d-4cda-892a-c2f441df6541" alt="This is image product" />
          <Text mt="14" mb="8" textDecor="underline">Description</Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae amet repellat natus nostrum nobis dicta delectus at expedita sed
            alias ipsum unde harum magni totam vitae saepe dolores, sit omnis.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="2md" fontFamily="secondary">
            Vote Now T-Shirt
          </Text>
          <Text my="5" color="primary" fontWeight="semibold">$33</Text>
          <Button w="80">
            Edit
          </Button>
        </Box>
      </Flex>
    </Container>
    <Footer />
  </Box>
);
