/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box, List } from '@mui/material';
import { M3NavigationDrawerProps } from './types';
import { Drawer } from '../Drawer';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '../ListItem';
import { Divider } from '../Divider';
import BadgeLabelText from './BadgeLabelText';

function NavigationDrawer(props: M3NavigationDrawerProps) {
  const { items, open, onClose } = props;

  return (
    <Drawer open={open} onClose={onClose}>
      <Box>
        {items.map((el, idx) =>
          el.items !== undefined ? (
            <List
              key={idx}
              subheader={
                el.headline ? (
                  <ListSubheader id="list subheader">
                    {el.headline}
                  </ListSubheader>
                ) : null
              }
            >
              {el.items.map((item) => (
                <ListItem
                  active={item.active}
                  key={item.label}
                  secondaryAction={
                    item.badgeLabel ? (
                      <BadgeLabelText text={item.badgeLabel} />
                    ) : null
                  }
                >
                  {item.icon !== undefined ? (
                    <ListItemIcon active={item.active} key={item.label}>
                      <item.icon />
                    </ListItemIcon>
                  ) : null}

                  <ListItemText active={item.active} primary={item.label} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Divider
              key={idx}
              sx={{ marginLeft: '28px', marginRight: '28px' }}
              variant="middle"
            />
          )
        )}
      </Box>
    </Drawer>
  );
}

NavigationDrawer.defaultProps = {
  open: false,
};

export default NavigationDrawer;
