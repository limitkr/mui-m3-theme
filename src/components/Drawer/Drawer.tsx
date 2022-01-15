/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const DrawerRoot = styled(MuiDrawer, {
  name: 'M3Drawer',
  slot: 'Root',
})(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '16px',
    backgroundColor: theme.palette.surface.main,
    boxShadow: theme.shadows[2],
    width: '360px',
  },
}));

const Drawer = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<MuiDrawerProps>
>((props, ref): JSX.Element => {
  const { ...other } = props;
  // const theme = useTheme();
  return (
    <DrawerRoot ref={ref} {...other}>
      <div
      /*
        style={{
          backgroundColor: chroma(theme.palette.secondary.main)
            .alpha(0.08)
            .hex(),
        }}
        */
      >
        {props.children}
      </div>
    </DrawerRoot>
  );
});

export default Drawer;
