import colors from './colors';
import fonts from './fonts';

// Components theme custom
import ButtonTheme from './components/buttons';
import TextTheme from './components/text';

export default {
  default: {
    colors,
    fonts,
    fontSizes: {
      '2md': '2rem', // 32px
    },
    components: {
      Button: ButtonTheme,
      Text: TextTheme,
    },
  },
};
