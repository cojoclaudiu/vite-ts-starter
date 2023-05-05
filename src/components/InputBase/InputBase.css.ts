import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { theme } from '../../styles/theme.css';

const inputWrapperBase = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: '1rem',
  position: 'relative',
});

const inputEl = style({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100%',
  height: '4.5rem',
  padding: '0 1.4rem',
  cursor: 'text',
  borderRadius: '1rem',
  boxSizing: 'border-box',
});

globalStyle(`[data-input="prefix"], [data-input="url"]`, {
  paddingLeft: '6rem',
});

globalStyle(`[data-input="suffix"]`, {
  paddingRight: '6rem',
});

const inputElBase = styleVariants({
  enabled: [
    inputWrapperBase,
    {
      color: 'rgba(0, 0, 0, 1)',
      background: 'white',
      boxShadow: '0 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.082)',
    },
  ],

  disabled: [
    inputWrapperBase,

    {
      color: 'rgba(121, 121, 121, 1)',
      background: 'rgba(239, 239, 239, 1)',
    },
  ],
});

const borderVariantsBase = styleVariants({
  initial: {
    border: '0.1rem solid rgba(209, 209, 214, 1)',
    selectors: {
      '&:not([disabled]):hover, &:focus': {
        border: `0.1rem solid ${theme.colors.primary.DEFAULT}`,
      },
      '&:focus': {
        border: `0.1rem solid ${theme.colors.primary.DEFAULT}`,
        outline: '0.4rem solid rgba(88, 86, 214, 0.2)',
      },
    },
  },
  success: {
    border: `0.1rem solid ${theme.colors.green.DEFAULT}`,
    selectors: {
      '&:focus': {
        outline: '0.4rem solid rgba(52, 199, 89, 0.2)',
      },
    },
  },
  warning: {
    border: `0.1rem solid ${theme.colors.red.DEFAULT}`,
    selectors: {
      '&:focus': {
        outline: '0.4rem solid rgba(255, 59, 48, 0.2)',
      },
    },
  },
});

const inputElState = styleVariants({
  initial: [inputElBase.enabled, borderVariantsBase.initial],

  success: [inputElBase.enabled, borderVariantsBase.success],

  warning: [inputElBase.enabled, borderVariantsBase.warning],

  disabled: [inputElBase.disabled, borderVariantsBase.initial],
});

export const styles = {
  inputWrapperBase,
  inputEl,
  inputElState,
};
