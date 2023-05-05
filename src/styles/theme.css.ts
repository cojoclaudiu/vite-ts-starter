import { createGlobalTheme } from '@vanilla-extract/css';

const globalTheme = createGlobalTheme(':root', {
  colors: {
    primary: {
      DEFAULT: 'rgba(88, 86, 214, 1)',
    },
    secondary: {
      DEFAULT: '',
    },
    red: {
      DEFAULT: 'rgba(255, 59, 48, 1)',
    },
    green: {
      DEFAULT: 'rgba(52, 199, 89, 1)',
    },
    gray: {
      DEFAULT: 'rgba(141, 141, 147, 1)',
    },
  },
});

export const theme = {
  colors: globalTheme.colors,
};
