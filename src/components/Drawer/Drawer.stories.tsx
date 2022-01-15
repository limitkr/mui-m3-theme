import React from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Stack,
  ThemeProvider,
  List,
} from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '../Button';
import Drawer from './Drawer';
import { ListItem, ListItemIcon, ListItemText } from '../ListItem';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const DrawerPreviewTemplate: ComponentStory<typeof Drawer> = (args) => {
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
                  Open Drawer
                </Button>
                <Drawer open>
                  <Box>
                    <List>
                      {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                        (text, index) => (
                          <ListItem
                            active={index == 0 ? true : false}
                            key={text}
                          >
                            <ListItemIcon active={index == 0 ? true : false}>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText
                              active={index == 0 ? true : false}
                              primary={text}
                            />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Box>
                </Drawer>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const DrawerView = DrawerPreviewTemplate.bind({});

DrawerView.args = {
  children: 'Filled button',
  variant: 'contained',
};
