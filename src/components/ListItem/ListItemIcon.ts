import React from 'react';
import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type M3ListItemIconProps = MuiListItemIconProps & { active?: boolean };

const ListItemIcon = styled(MuiListItemIcon, {
  name: 'M3ListItemIcon',
  slot: 'Root',
})<{ active?: boolean }>(({ theme, active }) => ({
  marginRight: '-20px',
  ...(active === true && {
    color: theme.palette.secondary.onContainer,
  }),
  ...(active === false && {
    color: theme.palette.surface.onVariant,
  }),
})) as React.ComponentType<M3ListItemIconProps>;

ListItemIcon.defaultProps = {
  active: false,
};

export default ListItemIcon;
