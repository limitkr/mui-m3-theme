import React from 'react';
import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type M3ListItemTextProps = MuiListItemTextProps & { active?: boolean };

const ListItemText = styled(MuiListItemText, {
  name: 'M3ListItemText',
  slot: 'Root',
})<{ active?: boolean }>(({ theme, active }) => ({
  '& .MuiTypography-root': {
    fontWeight: 700,
    letterSpacing: '-0.2px',
  },
  ...(active === true && {
    color: theme.palette.secondary.onContainer,
  }),
  ...(active === false && {
    color: theme.palette.surface.onVariant,
  }),
})) as React.ComponentType<M3ListItemTextProps>;

ListItemText.defaultProps = {
  active: false,
};

export default ListItemText;
