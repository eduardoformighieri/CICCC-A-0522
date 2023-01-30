// 1. Using a style object
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      '*': {
        boxSize: 'border-box',
      },
      'html, body': {
        background: 'gray.800',
      },
    },
  },
});
