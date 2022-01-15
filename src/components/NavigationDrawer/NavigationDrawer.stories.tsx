import React from 'react';
import { Box, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import NavigationDrawer from './NavigationDrawer';
import type { NavigationDrawerItems } from './types';
import { Button } from '../Button';

import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Navigation Drawer',
  component: NavigationDrawer,
  argTypes: {
    items: {
      name: 'items',
      description: 'List item for navigation drawer',
      table: {
        type: { summary: 'NavigationDrawerItems[]' },
      },
    },
  },
} as ComponentMeta<typeof NavigationDrawer>;

const NavigationDrawerPreview: ComponentStory<typeof NavigationDrawer> = (
  args
) => {
  const items = [
    {
      headline: 'Mail',
      items: [
        {
          label: 'Inbox',
          icon: InboxIcon,
          active: true,
          badgeLabel: '24',
        },
        {
          label: 'Outbox',
          icon: SendIcon,
          badgeLabel: '100+',
        },
      ],
    },
    '/',
    {
      items: [
        {
          label: 'Favorites',
          icon: FavoriteBorderIcon,
        },
        {
          label: 'Trash',
          icon: DeleteOutlineIcon,
        },
      ],
    },
  ] as NavigationDrawerItems[];

  const mergedItems = items.concat(args.items);

  const [open, setOpen] = React.useState(false);
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
          <Button onClick={handleOpen} variant="contained" color="primary">
            Open Drawer
          </Button>
          <Grid container item spacing={2}>
            <Grid item xs>
              <NavigationDrawer
                open={open}
                onClose={() => handleClose()}
                items={mergedItems}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const NavigationDrawerView = NavigationDrawerPreview.bind({});

NavigationDrawerView.args = {
  items: [
    {
      headline: 'Playground',
      items: [
        {
          label: 'Item 1',
          active: true,
          badgeLabel: '124',
        },
        {
          label: 'Item 2',
          badgeLabel: '3800+',
        },
      ],
    },
    '/',
    {
      items: [
        {
          label: 'Item 3',
        },
        {
          label: 'Item 4',
        },
      ],
    },
  ],
};
