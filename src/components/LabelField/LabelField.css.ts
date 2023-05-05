import { style } from '@vanilla-extract/css';

import { theme } from '../../styles/theme.css';

const label = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '1rem',
  width: '100%',
});

const labelName = style({
  fontSize: '1.6rem',
  fontWeight: '700',
  color: theme.colors.gray.DEFAULT,
});

export const styles = {
  label,
  labelName,
};
