export default {
  baseStyle: {
    borderRadius: 0,
  },
  variants: {
    solid: {
      backgroundColor: 'primary',
      color: 'white',
      h: '3.125rem', // 50px
      px: '1.625rem', // 26px
      _hover: {
        backgroundColor: 'primary',
      },
    },
    outline: {
      backgroundColor: 'primary',
      color: 'white',
      h: '1.688rem', // 27px
      px: '1.625rem', // 26px
      _hover: {
        backgroundColor: 'primary',
      },
    },
  },
};
