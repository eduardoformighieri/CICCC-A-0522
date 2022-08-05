// 1. Using a style object
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#5460f1',
    secondary: '#f8f6f2',
  },
  styles: {
    global: {
      '*': {
        fontFamily: 'Roboto',
      },
      'html, body': {
        background: 'secondary',
      },
    },
  },
});
