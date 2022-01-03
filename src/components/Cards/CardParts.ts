import chroma from 'chroma-js';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardContentProps as MuiCardContentProps,
  CardActionsProps as MuiCardActionsProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// eslint-disable-next-line react/require-default-props
export type M3CardProps = MuiCardProps & { clickable?: boolean };

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    elevated: true;
    contained: true;
    elevation: false;
  }
}

export const CardRoot = styled(MuiCard, {
  name: 'M3Card',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: M3CardProps }>(({ theme, ownerState }) => ({
  transition: '0.3s',
  borderRadius: '12px',
  boxShadow: 'none',
  ...(ownerState.clickable === true && {
    position: 'relative',
  }),
  ...(ownerState.variant === 'contained' && {
    backgroundColor: theme.palette.surface.variant,
    '&:hover': {
      backgroundColor: chroma
        .mix(
          chroma(theme.palette.surface.variant).alpha(0.08).hex(),
          theme.palette.surface.on
        )
        .hex(),
      boxShadow: theme.shadows[2],
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),
  ...(ownerState.variant === 'outlined' && {
    backgroundColor: theme.palette.surface.main,
    border: `1px solid ${theme.palette.outline.main}`,
    '&:hover': {
      backgroundColor: chroma
        .mix(
          chroma(theme.palette.surface.main).alpha(0.08).hex(),
          theme.palette.surface.on
        )
        .hex(),
      boxShadow: theme.shadows[2],
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),
  ...(ownerState.variant === 'elevated' && {
    backgroundColor: chroma
      .mix(
        chroma(theme.palette.primary.main).alpha(0.08).hex(),
        theme.palette.surface.main,
        0.92
      )
      .hex(),
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: chroma
        .mix(
          chroma(theme.palette.surface.main).alpha(0.08).hex(),
          theme.palette.surface.on
        )
        .hex(),
      boxShadow: theme.shadows[4],
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),
}));

export const CardContent = styled(MuiCardContent, {
  name: 'M3CardContent',
  slot: 'Root',
})(({ theme }) => ({})) as React.ComponentType<MuiCardContentProps>;

export const CardActions = styled(MuiCardActions, {
  name: 'M3CardActions',
  slot: 'Root',
})(({ theme }) => ({
  padding: '16px',
  // Consider creating new variants for align item options..
  // display: 'flex',
  // justifyContent: 'flex-end',
})) as React.ComponentType<MuiCardActionsProps>;
