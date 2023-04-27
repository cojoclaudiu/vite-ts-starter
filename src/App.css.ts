import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

globalStyle('#root', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
});

const card = style({
  padding: '2em',
});
globalStyle(`${card} > * + *`, {
  marginTop: '2rem',
});

const headingVariants = styleVariants({
  h1: [{ fontSize: '3rem' }],
});

const readTheDocs = style({
  color: '#888',
});

const logo = style({
  height: '8em',
  padding: '1.5em',
  willChange: 'filter',
  transition: 'filter 300ms',
});

const logoVariants = styleVariants({
  vite: [
    logo,
    {
      selectors: {
        '&:hover': {
          filter: 'drop-shadow(0 0 2em #646cffaa)',
        },
      },
    },
  ],
  react: [
    logo,
    {
      selectors: {
        '&:hover': {
          filter: 'drop-shadow(0 0 2em #61dafbaa)',
        },
      },
    },
  ],
  redux: [
    logo,
    {
      selectors: {
        '&:hover': {
          filter: 'drop-shadow(0 0 2em #764abbaa)',
        },
      },
    },
  ],
  vanillaExtract: [
    logo,
    {
      selectors: {
        '&:hover': {
          filter: 'drop-shadow(0 0 2em #646cffaa)',
        },
      },
    },
  ],
});

export const styles = {
  card,
  headingVariants,
  logoVariants,
  readTheDocs,
};
