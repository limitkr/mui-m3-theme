import React from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Stack,
  ThemeProvider,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '../Button';
import Dialog, { DialogTitle, DialogContentText } from './Dialog';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Dialogs',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const DialogPreviewTempalte: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = React.useState(true);
  const [hexColor, setHexColor] = React.useState<RGBColor>({
    r: 103,
    g: 80,
    b: 164,
    a: 1,
  });

  const handleChangeComplete = (color: ColorResult) => {
    setHexColor(color.rgb);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const m3Palette = createM3Palette(hexColor);
  const myTheme = unstable_createMaterialDesign3Theme(m3Palette);
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <SketchPicker
            color={hexColor}
            onChangeComplete={handleChangeComplete}
          />
          <Grid container item spacing={2}>
            <Grid item xs>
              <Typography sx={{ mb: 2 }} variant="h3" fontWeight="bold">
                Dialogs
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={handleOpen}
                  startIcon={<AddIcon />}
                  variant="contained"
                  color="primary"
                >
                  Open Dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Basic dialog title</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      A dialog is a type of modal window that appears in fornt
                      of app content to provide critical information, or ask for
                      a decision.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button variant="text">Enabled</Button>
                    <Button variant="text">Enabled</Button>
                  </DialogActions>
                </Dialog>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const DialogView = DialogPreviewTempalte.bind({});

DialogView.args = {
  children: 'Filled button',
  variant: 'contained',
};
