import React from 'react';
import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ListSubheader = styled(MuiListSubheader, {
  name: 'M3ListSubheader',
  slot: 'Root',
})(({ theme }) => ({
  color: theme.palette.surface.onVariant,
  backgroundColor: 'transparent',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '20px',
  marginTop: '24px',
  marginLeft: '14px',
  marginBottom: '18px',
})) as React.ComponentType<MuiListSubheaderProps>;

export default ListSubheader;
