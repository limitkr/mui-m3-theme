import React from 'react';
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type M3ListItemProps = MuiListItemProps & { active?: boolean };

const ListItem = styled(MuiListItem, {
  name: 'M3ListItem',
  slot: 'Root',
})<{ active?: boolean }>(({ theme, active }) => ({
  ...(active === true && {
    backgroundColor: theme.palette.secondary.container,
  }),
  height: '56px', // Active indicator height
  borderRadius: '28px', // ACtive indicator shape
  width: '336px', // Active indicator width
  margin: '0 auto',
})) as React.ComponentType<M3ListItemProps>;

export default ListItem;
