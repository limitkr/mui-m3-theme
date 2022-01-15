import React from 'react';
import {
  Divider as MuiDivder,
  DividerProps as MuiDivderProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Divider = styled(MuiDivder, {
  name: 'M3Divider',
  slot: 'Root',
})(({ theme }) => ({
  backgroundColor: theme.palette.outline.main,
})) as React.ComponentType<MuiDivderProps>;

export default Divider;
