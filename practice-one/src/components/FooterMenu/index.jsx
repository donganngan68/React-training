import {
  Box, Grid, HStack, ListItem, Text, UnorderedList, Link,
} from '@chakra-ui/react';
import React from 'react';

// Constant
import constants from '../../constants';

export default function FooterMenu() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="10">
      {constants.dataMenu.MenuFooter.map(({ id: menuId, menu, title }) => (
        <Box key={menuId}>
          <HStack>
            <Text pb="5" fontWeight="semibold">{title}</Text>
          </HStack>
          <UnorderedList m="0" listStyleType="none">
            {menu.map(({ name, href, id }) => (
              <ListItem key={id} pb="4" fontSize="sm"><Link href={href}>{name}</Link></ListItem>
            ))}
          </UnorderedList>
        </Box>
      ))}
    </Grid>
  );
}
