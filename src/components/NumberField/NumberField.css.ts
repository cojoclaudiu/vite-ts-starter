import { style } from '../../../node_modules/@vanilla-extract/css/dist/vanilla-extract-css.cjs';

const inputWrapperBase = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: '1rem',
  position: 'relative',
});

export const styles = { inputWrapperBase };
