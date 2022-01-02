import type { Components } from '@mui/material/styles';
import chroma from 'chroma-js';
import colors from '../../base/colors';
import contained from './contained';
import outlined from './outlined';
import root from './root';

export default {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root,
    contained: contained.root,
    outlined: outlined.root,
    sizeMedium: contained.sizeMedium,
    startIcon: {
      marginLeft: '-8px',
    },
  },
  variants: [
    {
      props: { variant: 'contained', color: 'primary' },
      style: {
        color: colors.primary.on,
      },
    },
    {
      props: { variant: 'contained', color: 'secondary' },
      style: {
        color: colors.secondary.on,
      },
    },
    {
      props: { variant: 'contained', color: 'tertiary' },
      style: {
        color: colors.tertiary.on,
      },
    },
  ],
} as Components['MuiButton'];
