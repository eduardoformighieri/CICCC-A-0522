import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Roboto';
      src: url('./fonts/Roboto/Roboto-Regular.ttf');
    }

    @font-face {
      font-family: 'RobotoBold';
      src: url('./fonts/Roboto/Roboto-Bold.ttf');
    }

    @font-face {
      font-family: 'RobotoBlack';
      src: url('./fonts/Roboto/Roboto-Black.ttf');
    }

    @font-face {
      font-family: 'RobotoThin';
      src: url('./fonts/Roboto/Roboto-Thin.ttf');
    }

    @font-face {
      font-family: 'RobotoMedium';
      src: url('./fonts/Roboto/Roboto-Medium.ttf');
    }

    @font-face {
      font-family: 'RobotoLight';
      src: url('./fonts/Roboto/Roboto-Light.ttf');
    }

      `}
  />
);
