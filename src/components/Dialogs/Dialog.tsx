import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContentText as MuiDialogContentText,
  DialogProps as MuiDialogProps,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import chroma from 'chroma-js';
import React from 'react';

const DialogRoot = styled(MuiDialog, {
  name: 'M3Dialog',
  slot: 'Root',
})(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '28px',
    backgroundColor: theme.palette.surface.main,
    minWidth: '280px',
    maxWidth: '560px',
    boxShadow: theme.shadows[4],
  },
}));

const Dialog = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<MuiDialogProps>
>((props, ref): JSX.Element => {
  // eslint-disable-next-line react/prop-types
  const { open, ...other } = props;
  const theme = useTheme();
  return (
    <DialogRoot ref={ref} open={open} {...other}>
      <div
        style={{
          backgroundColor: chroma(theme.palette.primary.main).alpha(0.08).hex(),
        }}
      >
        {props.children}
      </div>
    </DialogRoot>
  );
}) as React.ForwardRefExoticComponent<MuiDialogProps>;

export const DialogTitle = styled(MuiDialogTitle, {
  name: 'M3DialogTitle',
  slot: 'Root',
})(({ theme }) => ({
  color: theme.palette.surface.on,
})) as React.ComponentType<MuiDialogTitleProps>;

export const DialogContentText = styled(MuiDialogContentText, {
  name: 'M3DialogContentText',
  slot: 'Root',
})(({ theme }) => ({
  color: theme.palette.surface.onVariant,
})) as React.ComponentType<MuiDialogContentTextProps>;

export default Dialog;
