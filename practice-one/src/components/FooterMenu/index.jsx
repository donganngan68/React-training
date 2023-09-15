import React from 'react';

// Libraries from Chakra UI
import {
  Box, Grid, HStack, ListItem, Text, UnorderedList, Link,
} from '@chakra-ui/react';

const dataMenu = {
  MenuFooter: [
    {
      id: '0',
      title: 'Company',
      menu: [
        {
          id: 0,
          name: 'About Us',
          href: '#AboutUs',
        },
        {
          id: 1,
          name: 'Blog',
          href: '#Blog',
        },
        {
          id: 2,
          name: 'Careers',
          href: '#Careers',
        },
        {
          id: 3,
          name: 'Our Team',
          href: '#OurTeam',
        },
        {
          id: 4,
          name: 'Help Center',
          href: '#OurTeam',
        },
        {
          id: 5,
          name: 'Outlets',
          href: '#Outlets',
        },
      ],
    },
    {
      id: '1',
      title: 'Shop',
      menu: [
        {
          id: 0,
          name: 'Gift Cards',
          href: '#Gift',
        },
        {
          id: 1,
          name: 'Our Product',
          href: '#OurProduct',
        },
        {
          id: 2,
          name: 'My Account',
          href: '#MyAccount',
        },
        {
          id: 3,
          name: 'Shipping',
          href: '#Shipping',
        },
        {
          id: 4,
          name: 'Returns',
          href: '#Returns',
        },
        {
          id: 5,
          name: 'Rewards',
          href: '#Rewards',
        },
      ],
    },
    {
      id: '2',
      title: 'Support',
      menu: [
        {
          id: 0,
          name: 'Contact Us',
          href: '#ContactUs',
        },
        {
          id: 1,
          name: 'Payment Options',
          href: '#Payment',
        },
        {
          id: 2,
          name: 'Store Locator',
          href: '#Store',
        },
        {
          id: 3,
          name: 'Accessibility',
          href: '#Accessibity',
        },
        {
          id: 4,
          name: 'Affilicates',
          href: '#Affilicates',
        },
      ],
    },
    {
      id: '3',
      title: 'FAQ',
      menu: [
        {
          id: 0,
          name: 'Rewards FAQ',
          href: '#Rewards',
        },
        {
          id: 1,
          name: 'Product Care',
          href: '#Product',
        },
        {
          id: 2,
          name: 'Size Guide',
          href: '#Size',
        },
      ],
    },
  ],
};

export default function FooterMenu() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="10">
      {dataMenu.MenuFooter.map(({ id: menuId, menu, title }) => (
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
