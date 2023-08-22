// Import the `extendTheme` function from the Chakra UI library.
import { extendTheme } from '@chakra-ui/react';
// Import the 'Montserrat' font using the '@fontsource-variable/montserrat' package.
import '@fontsource-variable/montserrat';
//  Import the 'Poppins' font using the '@fontsource/poppins' package.
import '@fontsource/poppins';

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', san-serif",
    body: "'Poppins', san-serif",
  },
});

export default theme;
