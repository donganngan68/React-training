export default {
  baseStyle: {
    borderRadius: 0,
    fontWeight: '400',
  },
  variants: {
    solid: {
      backgroundColor: 'primary',
      color: 'white',
      px: '1.625rem', // 26px
      _hover: {
        backgroundColor: 'primary',
      },
    },
    outline: {
      borderColor: 'primary',
      color: 'primary',
      px: '1.625rem', // 26px
      _hover: {
        color: 'white',
        backgroundColor: 'primary',
      },
    },
  },
  sizes: {
    md: {
      h: '3.125rem', // 50px
    },
    sm: {
      h: '1.688rem', // 27px
    },
  },
};
