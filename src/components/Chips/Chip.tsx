import React from 'react';
import propTypes from 'prop-types';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import chroma from 'chroma-js';

type M3ChipProps = MuiChipProps & { checked?: boolean };

const ChipRoot = styled(MuiChip, {
  name: 'M3Chip',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: M3ChipProps }>(({ theme, ownerState }) => ({
  '& .MuiChip-icon': { color: theme.palette.secondary.onContainer },
  border: `1px solid ${theme.palette.outline.main}`,
  backgroundColor: theme.palette.surface.main,
  color: theme.palette.surface.on,
  fontWeight: 'bold',
  boxShadow: 'none',
  borderRadius: '8px',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: chroma(theme.palette.secondary.onContainer)
      .alpha(0.08)
      .hex(),
    '@media (hover: none)': {
      backgroundColor: 'transparent',
    },
  },
  ...(ownerState.checked === true && {
    backgroundColor: theme.palette.secondary.container,
    color: theme.palette.secondary.onContainer,
    border: `1px solid ${theme.palette.secondary.container}`,
    '&:hover': {
      backgroundColor: `${chroma
        .mix(
          chroma(theme.palette.secondary.onContainer).alpha(0.08).hex(),
          theme.palette.secondary.container,
          0.92
        )
        .hex()} !important`,
      border: `1px solid ${chroma
        .mix(
          chroma(theme.palette.secondary.onContainer).alpha(0.08).hex(),
          theme.palette.secondary.container,
          0.92
        )
        .hex()} !important`,
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),
}));

const Chip = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<M3ChipProps>
>(function Chip(props, ref) {
  const { checked, clickable, ...other } = props;
  const [enabled, setEnabled] = React.useState<boolean>(checked ?? true);

  const ownerState = { ...other, checked: enabled };

  const handleClick = () => {
    setEnabled(!enabled);
  };
  if (clickable) {
    return (
      <ChipRoot
        ref={ref}
        ownerState={ownerState}
        onClick={handleClick}
        clickable
        {...other}
      />
    );
  }
  return <ChipRoot ref={ref} ownerState={ownerState} {...other} />;
});

Chip.defaultProps = {
  checked: false,
  clickable: false,
};

Chip.propTypes = {
  clickable: propTypes.bool,
};

export default Chip;
