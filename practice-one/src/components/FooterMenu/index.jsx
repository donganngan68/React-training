import {
  Box, Grid, HStack, ListItem, Text, UnorderedList, Link,
} from '@chakra-ui/react';
import React from 'react';

// Constant
import constants from '../../constants';

export default function FooterMenu() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="10">
      {constants.dataMenu.MenuFooter.map((item) => (
        <Box>
          <HStack>
            <Text pb="5" fontWeight="semibold">{item.title}</Text>
          </HStack>
          <UnorderedList m="0" listStyleType="none">
            {item.menu.map((a) => <ListItem pb="4" fontSize="sm"><Link href={a.href}>{a.name}</Link></ListItem>)}
          </UnorderedList>
        </Box>
      ))}
    </Grid>
  );
}
