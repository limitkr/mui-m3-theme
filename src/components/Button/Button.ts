import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import chroma from 'chroma-js';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    success: false;
    info: false;
    warning: false;
  }
  interface ButtonPropsVariantOverrides {
    elevated: true;
    tonal: true;
  }
  interface ButtonClasses {
    elevated: string;
    elevatedPrimary: string;
    elevatedSecondary: string;
    elevatedTertiary: string;
  }
}

const Button = styled(MuiButton, {
  name: 'M3Button',
  slot: 'Root',
})(({ theme, variant, color, startIcon }) => ({
  boxShadow: variant === 'elevated' ? theme.shadows[2] : 'none',
  ...(variant === 'contained' &&
    color !== undefined &&
    color !== 'inherit' && {
      '&:active': {
        backgroundColor: chroma(theme.palette[color].main).alpha(0.88).hex(),
        boxShadow: 'none',
      },
    }),
  ...(variant === 'elevated' &&
    color !== undefined &&
    color !== 'inherit' && {
      color: theme.palette[color].main,
      backgroundColor: chroma
        .mix(
          chroma(theme.palette[color].onContainer).alpha(0.05).hex('rgb'),
          theme.palette.surface.main,
          0.95
        )
        .hex('rgb'),

      '&:hover': {
        boxShadow: theme.shadows[3],
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
        color: theme.palette[color].main,
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.08)
          .hex(),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.12)
          .hex(),
      },
    }),
  ...(variant === 'outlined' &&
    color !== undefined &&
    color !== 'inherit' && {
      border: `1px solid ${theme.palette.outline.main}`,
      '&:hover': {
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.08)
          .hex(),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      /*
      '&:focus': {
        border: `1px solid ${theme.palette[color].main}`,
        backgroundColor: chroma(theme.palette[color].main).alpha(0.12).hex(),
      },
      */
      '&:active': {
        border: `1px solid ${theme.palette.outline.main}`,
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.12)
          .hex(),
      },
    }),
  ...(variant === 'text' &&
    color !== undefined &&
    color !== 'inherit' && {
      paddingLeft: '12px',
      paddingRight: startIcon ? '16px' : '12px',
      '&:hover': {
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.08)
          .hex(),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&:active': {
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.12)
          .hex(),
      },
    }),
  ...(variant === 'tonal' && {
    backgroundColor: theme.palette.secondary.container,
    color: theme.palette.secondary.onContainer,
    '&:hover': {
      boxShadow: theme.shadows[2],
      backgroundColor: chroma
        .mix(
          chroma(theme.palette.secondary.onContainer).alpha(0.08).hex(),
          theme.palette.secondary.container,
          0.5
        )
        .hex(),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&:active': {
      boxShadow: 'none',
    },
  }),
})) as React.ComponentType<MuiButtonProps>;

export default Button;
