import React from 'react';
import { render } from '@testing-library/react';
import { MaterialDesign3Theme } from '../../asset';
import { ThemeProvider } from '@mui/material/styles';
import NavigationDrawer from './NavigationDrawer';
import { NavigationDrawerItems } from './types';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

describe('Button', () => {
  test('renders the Button component', () => {
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
    render(
      <ThemeProvider theme={MaterialDesign3Theme}>
        <NavigationDrawer open={true} items={items} />
      </ThemeProvider>
    );
  });
});
